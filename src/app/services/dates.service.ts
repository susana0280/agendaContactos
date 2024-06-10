import { Injectable, inject } from '@angular/core';
import { Icontact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

id:number=0

contactBuscado:Icontact | any;

dataForm?:Icontact | any;

  constructor() { }


  getData():number{

    return this.id

  }

  setData(id:number){

    this.id=id
  }

  setDataForm(dataForm:Icontact | any){

     this.dataForm=dataForm
    
  }

  getDataForm():Icontact{
    
    return this.dataForm
  }

  setContactBuscado(contactBuscado:Icontact | any){
    this.contactBuscado=contactBuscado;
   
     
 }

 getContactBuscado():Icontact|any{
   return this.contactBuscado
 }



}

