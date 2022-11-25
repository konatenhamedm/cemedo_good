import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { Medecin } from 'src/app/_modeles/medecin/Medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

 
  private baseUrl:string=ConfigGeneral.BaseUrl.Url+"employe/medecin/"
  constructor(private http:HttpClient) { }
  getListeEmployeTraitant() {
    return this.http
        .get<any>(ConfigGeneral.BaseUrl.Url+"employe/employeTraitant")
        .toPromise()
        .then((res) => <Medecin[]>res.data)
        .then((data) => {
         console.log(data);
            return data;
        });
}
  getListe() {
    return this.http
        .get<any>(this.baseUrl+"getAll")
        .toPromise()
        .then((res) => <Medecin[]>res.data)
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
