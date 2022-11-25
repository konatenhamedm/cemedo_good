import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { TypeMedecin } from 'src/app/_modeles/type-medecin/typeMedecin';

@Injectable({
  providedIn: 'root'
})
export class TypeMedecinService {

  private baseUrl:string=ConfigGeneral.BaseUrl.Url+"typeMedecins/"
  constructor(private http:HttpClient) { }

  getListe() {
    return this.http
        .get<any>(this.baseUrl)
        .toPromise()
        .then((res) => <TypeMedecin[]>res.data)
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
