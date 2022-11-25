import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { ArretMaladie } from 'src/app/_modeles/arret-maladie/arretMaladie';

@Injectable({
  providedIn: 'root'
})
export class ArretMaladieService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = ConfigGeneral.BaseUrl.Url+"arretMaladies/";
  getListe() {
    return this.http
        .get<any>(this.baseUrl,{
          headers:new HttpHeaders({'Content-Type':'application/json'})
        })
        .toPromise()
        .then((res) => <ArretMaladie[]>res.data)
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

update(data: any): Observable<any> {
  console.log(data);
  return this.http.post(`${this.baseUrl+ "update"}`, data);
}

delete(id: any): Observable<any> {
  return this.http.get(`${this.baseUrl+ "active"}/${id}`);
}
}
