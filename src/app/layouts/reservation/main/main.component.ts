import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { DatePipe, NgClass } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, RouterLink, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  stateForm: boolean = false;
  //stateFormE: boolean = false;
  today = new Date();
  checkDate: boolean = false;

  formHabitation: FormGroup = this.fb.group({
    checkin:  ['', Validators.required ],
    checkout: ['', Validators.required ]
  });
  constructor( private fb: FormBuilder, private clientService: ClientService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  showMenuH(){    
    this.stateForm = this.stateForm === true ? false : true;
    console.log(this.stateForm);
  }

  showMenuE(){    
    this.stateForm = this.stateForm ===  true ? false : true;
  }

  onSubmitHabitation(){
    if (this.formHabitation.value.checkout < this.formHabitation.value.checkin) {
      this.checkDate = true;
      this.formHabitation.reset();      
    }else{

      this.clientService.consultHabitation(this.formHabitation.value).subscribe( resp => {
        
        this.clientService.habitations_available = resp;
        this.clientService.checks = this.formHabitation.value;        
        this.router.navigate(["/reserva/habitacion"])
      });
      
    }
  }

}
