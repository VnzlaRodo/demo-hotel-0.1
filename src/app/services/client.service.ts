import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessagesService } from '../models/messageService';
import { MessagesContact } from '../models/messageContact';
import { Habitation } from '../models/habitation';
import { Client } from '../models/client';
import { Lodging } from '../models/lodging';
import { ApplicationLodging } from '../models/applicationLodging';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://127.0.0.1:8000/api';
  //private url = 'https://api-hotel.naguarasoftware.com/api';

  habitations_available: Habitation[] = [];
  checks: any;

  constructor( private _http: HttpClient ) { }

  setMessageServices( message: MessagesService){
    return this._http.post(`${this.url}/messageservices-public`, message);
  }

  setMessageContact( message: MessagesContact ){
    return this._http.post(`${this.url}/messageContacts-public`,message);
  }

  consultHabitation( request: any ){
    return this._http.post<Habitation[]>(`${this.url}/lodgings/forrange`, request);
  }

  getClient( cedula: any){
    return this._http.post(`${this.url}/clients-public-cedula`, cedula);
  }

  private setclient( client: Client ){
    
    const formData = new FormData();

    formData.append('cedula', client.cedula);
    formData.append('name', client.name);
    formData.append('lastname', client.lastname);
    formData.append('phone', client.phone);
    formData.append('email', client.email);
    formData.append('address', client.address);
    formData.append('avatar', client.avatar, client.avatar.name);

    return this._http.post<Client>(`${this.url}/clients-public`, formData);
  }

  private updateClient(client: Client, id: string){

    const formData = new FormData();

    formData.append('cedula', client.cedula);
    formData.append('name', client.name);
    formData.append('lastname', client.lastname);
    formData.append('phone', client.phone);
    formData.append('email', client.email);
    formData.append('address', client.address);
    formData.append('avatar', client.avatar, client.avatar.name);

    return this._http.post<Client>(`${this.url}/clients-public-update/${id}`, formData);

  }

  private setLodging( lodging: Lodging ){
    return this._http.post<Lodging>(`${this.url}/lodgings-public`, lodging);
  }

  setApplicationLodging( application: any, id: string ){

    let clientTemp: Client = {
      id: "",
      cedula: application.tipoIdentidad + application.cedula,
      name: application.name,
      lastname: application.lastname,
      phone: application.phone,
      email: application.email,
      address: application.address,
      avatar: application.avatar
    };
    
    let client: Client;
    let lodgingTemp: Lodging;

    if ( id != '' ) {

        this.updateClient(clientTemp,id).subscribe( (resp: any) => {
        client = resp.client;
        console.log(resp);
        lodgingTemp = {
          id_client: client.id,
          checkin: application.checkin,
          checkout: application.checkout,
          adults: application.adults,
          children: application.children
        }

        this.setLodging( lodgingTemp ).subscribe( resp => {
          console.log(resp);
        }, (error) => {
          console.error('Error al enviar los datos reserva', error);
        });

      }, (error) => {
        console.error('Error al enviar los datos cliente', error);
      });

    } else {

      this.setclient(clientTemp).subscribe( (resp: any) => {
        client = resp.client;
        console.log(resp);
        lodgingTemp = {
          id_client: client.id,
          checkin: application.checkin,
          checkout: application.checkout,
          adults: application.adults,
          children: application.children
        }
  
        this.setLodging( lodgingTemp ).subscribe( resp => {
          console.log(resp);
        }, (error) => {
          console.error('Error al enviar los datos reserva', error);
        });
  
      }, (error) => {
        console.error('Error al enviar los datos cliente', error);
      });

    }   
    
  }

}
