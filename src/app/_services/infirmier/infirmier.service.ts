import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { Infirmier } from 'src/app/_modeles/infirmier/Infirmier';

@Injectable({
  providedIn: 'root'
})
export class InfirmierService {

  
  private baseUrl:string=ConfigGeneral.BaseUrl.Url+"employe/infirmier/"
  constructor(private http:HttpClient) { }
  
  getListe() {
    return this.http
        .get<any>(this.baseUrl+"getAll")
        .toPromise()
        .then((res) => <Infirmier[]>res.data)
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
