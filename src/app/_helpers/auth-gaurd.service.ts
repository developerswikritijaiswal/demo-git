import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AccountService } from '../_Services/account.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private router:Router, private accountService:AccountService ) { }
  canActivate(){
    const user = this.accountService;
  }
}
