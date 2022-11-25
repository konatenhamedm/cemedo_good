import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Specialite } from 'src/app/_modeles/specialite/specialite';
import { Observable } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { ConfigGeneral } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  private baseUrl:string=ConfigGeneral.BaseUrl.Url+"specialite/"
  constructor(private http:HttpClient) { }

  getListe(prams?:any) {
    return this.http
        .get<any>(this.baseUrl)
        .toPromise()
        .then((res) => <Specialite[]>res.data)
        .then((data) => {
            return data;
        });
}
getListe1() {
  return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <Specialite[]>res.data)
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

update(id: any, data: any): Observable<any> {
  console.log(data);
  return this.http.post(`${this.baseUrl+ "update"}/${id}`, data);
}

delete(id: any): Observable<any> {
  return this.http.get(`${this.baseUrl+ "active"}/${id}`);
}
}
