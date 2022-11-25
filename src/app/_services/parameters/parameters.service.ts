import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { Parameters } from 'src/app/_modeles/parameters/parameters';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  private baseUrl:string = ConfigGeneral.BaseUrl.Url+"parameters/";
  
  constructor(private http:HttpClient) { }
  
  getListe() {
    return this.http
        .get<any>(this.baseUrl,{
          headers:new HttpHeaders({'Content-Type':'application/json'})
        })
        .toPromise()
        .then((res) => <Parameters[]>res.data)
        .then((data) => {
          return data;
         });
}


create(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.baseUrl+ "create", data);
  }
  
  deleteSelectedProducts(data:any): Observable<any> {
    return this.http.post(this.baseUrl+ "active", data);
  }

update(id: any,data: any): Observable<any> {
  console.log(data);
  return this.http.post(`${this.baseUrl+ "update"}/${id}`, data);
}

delete(id: any): Observable<any> {
  return this.http.get(`${this.baseUrl+ "active"}/${id}`);
}
}
