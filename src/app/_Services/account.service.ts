import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from '../_modal/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  // // login(data:any){
  // //   return this.http.post<any>("http://localhost:3000/login", data)
  // //   .pipe(map(user => {
  // //     localStorage.setItem('user', JSON.stringify(user));
  // //     return user;
  // // }));
  // }
}
