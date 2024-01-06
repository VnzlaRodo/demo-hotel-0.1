import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ReservationComponent } from './layouts/reservation/reservation.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { ExtraComponent } from './layouts/extra/extra.component';
import { MainComponent } from './layouts/reservation/main/main.component';
import { HabitationComponent } from './layouts/reservation/habitation/habitation.component';
import { SpaceEventComponent } from './layouts/reservation/space-event/space-event.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    {path: 'reserva', component: ReservationComponent,
        children: [
        {path: '', component: MainComponent},
        {path: 'habitacion',component: HabitationComponent},
        {path: 'nuestros-espacios', component: SpaceEventComponent}
        ]
    }, 
    { path: "servicios", component: ExtraComponent },
    { path: "contacto", component: ContactComponent }
];
