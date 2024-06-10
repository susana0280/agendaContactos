import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { validateHeaderValue } from 'http';
import { ApiContactService } from '../../services/api-contact.service';
import { Router } from '@angular/router';
import { DatesService } from '../../services/dates.service';
import { Icontact } from '../../models/contact.model';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit {
   
  datesForm:Icontact | any;
  id:number=0
  updateContact:Icontact | any

  _ContactService=inject(ApiContactService)
  _router=inject(Router)
  _dateService=inject(DatesService)

  formularioContacto:FormGroup |any ;
 

constructor(private builder:FormBuilder){

  this.datesForm=this._dateService.getDataForm()
  console.log(this.datesForm)
  
  if(this.datesForm){

  this.formularioContacto=this.builder.group({
    name:[this.datesForm.name,[Validators.required,Validators.minLength(3)]],
    username:[this.datesForm.username,[Validators.required,Validators.minLength(3)]],
    email:[this.datesForm.email,[Validators.required,Validators.email]],
    street:[this.datesForm.street,[Validators.required,Validators.minLength(3)]],
    city:[this.datesForm.city,[Validators.required,Validators.minLength(3)]],
    phone:[this.datesForm.phone,[Validators.required,Validators.maxLength(9)]],
  })
}


if(!this.datesForm){
  this.formularioContacto=this.builder.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    username:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    street:['',[Validators.required,Validators.minLength(3)]],
    city:['',[Validators.required,Validators.minLength(3)]],
    phone:['',[Validators.required,Validators.maxLength(9)]],
  })


}
}
  ngOnInit(): void {


  }






hasError(ControlName:string, ErrorType:string){
return this.formularioContacto.get(ControlName)?.hasError(ErrorType) && this.formularioContacto.get(ControlName)?.touched
}

agregar(){
  this.datesForm=this.formularioContacto.value
this._ContactService.postContact(this.datesForm).subscribe( (data)=>{
  alert("Su contacto ha sido agregado")
  },
  error=>{
    console.log(error.message+"__________")
  }

)
  this._router.navigate(['/'])

}


actualizar(){
  this.id=this._dateService.getData()
 this._dateService.setDataForm(this.formularioContacto.value)
 this._ContactService.putContact(this.id,this._dateService.getDataForm()).subscribe(
  data=>console.log(data)
 )
this._router.navigate(['/'])
}

volver(){
  this._router.navigate(['/'])
}


}
