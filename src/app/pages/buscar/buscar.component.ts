import { Component, NgModule, Input, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Icontact } from '../../models/contact.model';
import { DatesService } from '../../services/dates.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})


export class BuscarComponent {

@Input() contactList:Icontact[]=[]

apellido:string="";
contactBuscado:Icontact[]=[];

route=inject(Router)
_dates_Service=inject(DatesService)

constructor(){

}



buscar(e:Event){
this.contactBuscado=this.contactList.filter(contact=>contact.username===this.apellido)
this._dates_Service.setContactBuscado(this.contactBuscado)
this.route.navigate(['/contact'])
};


}
