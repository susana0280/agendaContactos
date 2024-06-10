import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    {path:"", component:ListadoComponent},
    {path:"add", component:AgregarComponent},
    {path:"contact", component:ContactComponent},
    {path:"**", redirectTo:"",pathMatch:'full'},
];
