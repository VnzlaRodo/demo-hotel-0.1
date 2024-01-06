import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TypeService } from '../models/typeservice';
import { EventClient } from '../models/eventClient';
import { TypeHabitation } from '../models/typehabitation';
import { Space } from '../models/space';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url = 'http://127.0.0.1:8000/api';
  //private url = 'https://api-hotel.naguarasoftware.com/api';
  
  
  constructor( private _http: HttpClient ) { }

  //Home

  getServices(){

    return this._http.get<TypeService[]>(`${ this.url }/typeservices-public`)
                          .pipe((
                            map( resp => {
                              return resp.filter( (resp) => resp.show != 0 )
                            } )
                          ))        
  }

  getEvents(){

    var data:EventClient[]= [];
    
    return this._http.get<EventClient[]>(`${this.url}/events-public`)
                          .pipe((
                            map( resp => {
                              
                             resp.forEach(element => {                 
                           
                                var temp:EventClient = {"id": "0", "amount": 0, "avatar": "", "name": "", "price": 0, "space": { "name": ""}, "status": "", "type": {"name": ""}};
                                
                                temp.id = element.id;
                                temp.name = element.name;
                                temp.price = element.price;
                                temp.date = element.date;
                                temp.amount = element.amount;
                                temp.avatar = element.avatar;
                                temp.status = element.status;
                                temp.space.name = element.space.name;
                                temp.space.amount = element.space.amount;
                                temp.space.size = element.space.size;
                                temp.type.name = element.type.name;
                                temp.type.status = element.type.status;

                                data.push(temp);                              
                               
                              });
                              return data;

                            })
                          ))
  }

  //Reservations
  getTypeHabitation(){

    return this._http.get<TypeHabitation[]>(`${ this.url }/typehabitations-public`)
                            .pipe((
                              map( resp => {
                                return resp.filter( (resp) => resp.status != 0 )
                              } )
                            )) 
  }

  //Spaces
  getSpaces(){
    return this._http.get<Space[]>(`${ this.url }/spaces-public`) 
                            .pipe((
                              map( resp => {
                                return resp.filter( (resp) => resp.status != 0 )
                              } )
                            )) 
  }

  getHabitations(){
    return this._http.get(`${ this.url }/habitations`);
  }
  
}
