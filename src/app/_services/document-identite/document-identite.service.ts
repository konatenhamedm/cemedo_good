import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { DocumentIdentite } from 'src/app/_modeles/document-identite/documentIdentite';

@Injectable({
  providedIn: 'root'
})
export class DocumentIdentiteService {

  private baseUrl:string = ConfigGeneral.BaseUrl.Url+"documentIdentite/";
  constructor(private http:HttpClient) { }
  
  getListe() {
    return this.http
        .get<any>(this.baseUrl,{
          headers:new HttpHeaders({'Content-Type':'application/json'})
        })
        .toPromise()
        .then((res) => <DocumentIdentite[]>res.data)
        .then((data) => {
            return data;
        });
}


create(data: any): Observable<any> {
  console.log(data);
  return this.http.post(this.baseUrl+ "carteIdentite/create", data);
}

deleteSelectedProducts(data:any): Observable<any> {
  return this.http.post(this.baseUrl+ "active", data);
}
update(id: any,data: any): Observable<any> {
  console.log(data);
  return this.http.post(`${this.baseUrl+ "update"}/${id}`, data);
}
changeState(data: any): Observable<any> {
  console.log(data);
  return this.http.post(`${this.baseUrl+ "changeState"}`, data);
}

delete(id: any): Observable<any> {
  return this.http.get(`${this.baseUrl+ "active"}/${id}`);
}
}
