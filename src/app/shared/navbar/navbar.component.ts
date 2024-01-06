import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor( @Inject(PLATFORM_ID) private platformId: Object){

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { AOS.init({ once: true, duration: 1000 }); }
  }

}
