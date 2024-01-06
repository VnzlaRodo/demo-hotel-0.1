import { UpperCasePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carrousel-home',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './carrousel-home.component.html',
  styleUrl: './carrousel-home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselHomeComponent {

  @Input() data: any[] = [];

}
