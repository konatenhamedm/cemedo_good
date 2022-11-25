import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { Patient } from 'src/app/_modeles/patient/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  private baseUrl:string= ConfigGeneral.BaseUrl.Url+"/assures/patient/"
  private baseUrl_delete:string= ConfigGeneral.BaseUrl.Url+"assures/"
  constructor(private http:HttpClient) { }
  
  getListe() {
    return this.http
        .get<any>(this.baseUrl+"all",{
          headers:new HttpHeaders({'Content-Type':'application/json'})
        })
        .toPromise()
        .then((res) => <Patient[]>res.data)
        .then((data) => {
            return data;
        });
}


create(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.baseUrl+ "create", data);
  }
  
  deleteSelectedProducts(data:any): Observable<any> {
    return this.http.post(this.baseUrl_delete+ "active", data);
  }

update(data: any): Observable<any> {
  console.log(data);
  return this.http.post(`${this.baseUrl+ "update"}`, data);
}

delete(id: any): Observable<any> {
  return this.http.get(`${this.baseUrl_delete+ "active"}/${id}`);
}
}
