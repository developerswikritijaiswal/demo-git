import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private FB:FormBuilder, private http: HttpClient, private router:Router) { }
  submitted:any;
  ngOnInit(): void {
  }
  mainForm = this.FB.group({
    Fullname : ['',Validators.required],
    Mobile :['',Validators.required],
    email:  ['',[Validators.required, Validators.email]],
    Password:  ['',[Validators.required,Validators.maxLength(8),Validators.minLength(5)]]
  })
  get f(){
    return this.mainForm.controls;
  }

  onSubmit(){
    this.submitted = true
    if( this.mainForm.valid){
    this.http.post<any>("http://localhost:3000/SignUp", this.mainForm.value)
    .subscribe(res=>{
     
        alert('signup Sucessful!');
        this.router.navigate(["/Login"]);
        this.mainForm.reset();
    },err=>{
      alert('something wrong!')
    })
  }

  }
}
