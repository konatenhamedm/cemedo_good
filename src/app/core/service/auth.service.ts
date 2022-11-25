import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public config:string="http://cemedo.openslearning.com/cemedo/login_check"
  private userAuth:User=new User()
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
  
 // headers =new HttpHeaders.set('Content-Type','application/json');

 // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});


  authUser(username: string, password: string):Observable<any>{

   this.userAuth.username=username
   this.userAuth.password=password
   return this.http.post<any>("http://cemedo.openslearning.com/cemedo/login_check",this.authUser,
   {headers:new HttpHeaders({'Content-Type':'application/json'})} 
   )
  }

}
