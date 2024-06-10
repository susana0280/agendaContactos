import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icontact } from '../models/contact.model';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class ApiContactService {

  listContacts?:[]=[];
 

 private urlBase:string="http://localhost:3001/api"
 

 
  constructor(private _http:HttpClient) { }

  getContact():Observable<Icontact>{
    return this._http.get<Icontact>(this.urlBase)
  }

  getContactById(id:number):Observable<Icontact>{

    return this._http.get<Icontact>(`${this.urlBase}/${id}`)
  }

  postContact(body:{}):Observable<Icontact>{
    
    return this._http.post<Icontact>(`${this.urlBase}`,body)
    
    }
    deleteContact(id:number):Observable<Icontact>{
    
      return this._http.delete<Icontact>(`${this.urlBase}/${id}`)
      
      } 
    
      putContact(id:number,body:Icontact):Observable<Icontact>{

     return this._http.put<Icontact>(`${this.urlBase}/${id}`,body)

      }


  }

