import { Injectable } from '@angular/core';
import { Partner } from '../model/partner';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private baseUrl: string = "http://localhost:3006";
  httpOptions={
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  }
  constructor(private http:HttpClient) { }
  getAllPartner():Observable<Partner[]>{
    return this.http.get<Partner[]>(this.baseUrl+'/freelancers')
  }
  getPartner(id:number):Observable<Partner>{
    return this.http.get<Partner>(this.baseUrl+'/freelancers/'+`${id}`)
  }
  addPartner(partner:Partner):Observable<Partner>{
    return this.http.post<Partner>(this.baseUrl+'/freelancers',partner, this.httpOptions);
  }
  deletePartner(id:number):Observable<Partner>{
    return this.http.delete<Partner>(this.baseUrl+'/freelancers/'+id)
  }

}
