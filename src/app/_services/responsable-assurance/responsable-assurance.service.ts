import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { ResponsableAssurance } from 'src/app/_modeles/responsable-assurance/ResponsableAssurance';

@Injectable({
  providedIn: 'root'
})
export class ResponsableAssuranceService {

  private baseUrl:string=ConfigGeneral.BaseUrl.Url+"employe/responsableAssurance/"
  constructor(private http:HttpClient) { }

  getCustomers(params?: any) {
    return this.http.get<any>(this.baseUrl+"getAll", { params: params }).toPromise();
}
  getListe() {
    return this.http
        .get<any>(this.baseUrl+"getAll")
        .toPromise()
        .then((res) => <ResponsableAssurance[]>res.data)
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
