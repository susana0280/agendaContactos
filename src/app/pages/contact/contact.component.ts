import { Component, OnInit, inject } from '@angular/core';
import { DatesService } from '../../services/dates.service';
import { Icontact } from '../../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  _dates_Service=inject(DatesService)
  _router=inject(Router)
  contactBuscado:Icontact[]=[];

  constructor(){

   
  }
  ngOnInit(): void {
    this.contactBuscado=this._dates_Service.getContactBuscado()
   
   
  }
volver(){
  this._router.navigate([''])
}

}
