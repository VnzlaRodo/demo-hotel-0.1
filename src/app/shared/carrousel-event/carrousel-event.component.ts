import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { EventClient } from '../../models/eventClient';
import { register } from 'swiper/element/bundle';
import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

register();


@Component({
  selector: 'app-carrousel-event',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './carrousel-event.component.html',
  styleUrl: './carrousel-event.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselEventComponent {

  @Input() events: EventClient[] = [];

  time = new Date();


}
