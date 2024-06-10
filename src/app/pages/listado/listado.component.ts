import { Component, OnInit, inject } from '@angular/core';
import { ApiContactService } from '../../services/api-contact.service';
import { Icontact } from '../../models/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { DatesService } from '../../services/dates.service';
import { concatAll } from 'rxjs';
import { BuscarComponent } from '../buscar/buscar.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [BuscarComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  
  
constactList?:Icontact[] |any=[]
dataForm:Icontact | any={}
id:number=0


  constructor(
    private _http: HttpClient,
    private _contactService:ApiContactService,
    private router:Router,
    private _dateService:DatesService
  ){

    }
  
  

  ngOnInit(): void {
   
    this.getContacts();


}
ngOnChanges():void{
  this.getContacts()
}


getContacts() {
  this._contactService.getContact().subscribe((data: Icontact) => {
    this.constactList = data;
  });
}

 addContact(){
 this.router.navigate(['/add'])

}


eliminar(id:number){
this._contactService.deleteContact(id).subscribe(data=>{
  console.log(data)
 location.reload()

})
 
}

updateContact(id:number){
  this.id=id;
  this._dateService.setData(id)
  this.dataForm=this.constactList?.find((contact:Icontact)=>contact.id===id)
    console.log(this.dataForm)
    this._dateService.setDataForm(this.dataForm)
 this.router.navigate(['/add'])

}



}

