import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../../_modeles/service/service';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl:string=ConfigGeneral.BaseUrl.Url+"service_s/"
  constructor(private http:HttpClient) { }

  getListe(params?: any) {
    return this.http
        .get<any>(this.baseUrl)
        .toPromise()
        .then((res) => <Service[]>res.data)
        .then((data) => {
          console.log(data);
            return data;
          
        });
}

getListe1() {
  return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <Service[]>res.data)
      .then((data) => {
        console.log(data);
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
