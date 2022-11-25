import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigGeneral } from 'src/app/config/config.service';
import { Agora } from 'src/app/_modeles/agora/agora';


@Injectable({
  providedIn: 'root'
})
export class AgoraService {

  private baseUrl:string = ConfigGeneral.BaseUrl.Url+"serviceAppel/";

  constructor(private http:HttpClient) { }
  
  getListe() {
    return this.http
        .get<any>(this.baseUrl,{
          headers:new HttpHeaders({'Content-Type':'application/json'})
        })
        .toPromise()
        .then((res) => <Agora[]>res.data)
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
  
  return this.http.post(`${this.baseUrl+ "setEmployeTraitant"}`, data);
}

delete(id: any): Observable<any> {
  return this.http.get(`${this.baseUrl+ "active"}/${id}`);
}
setEmployeTraitant(doc: any,employe: any,gerant:any): Observable<any> {
  //console.log(idE);
  //console.log(id);
  return this.http.get(`${this.baseUrl+ "setEmployeTraitant"}/${doc}/${employe}/${gerant}`);
}
}