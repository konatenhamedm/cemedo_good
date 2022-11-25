import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { Administrateur } from 'src/app/_modeles/administrateur/Administrateur';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private baseUrl:string= ConfigGeneral.BaseUrl.Url+"employe/administrateur/"
  constructor(private http:HttpClient) { }
  
  getListe() {
    return this.http
        .get<any>(this.baseUrl +"getAll",{
          headers:new HttpHeaders({'Content-Type':'application/json'})
        })
        .toPromise()
        .then((res) => <Administrateur[]>res.data)
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
