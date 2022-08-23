import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private FB : FormBuilder) { }
  submitted=false;
  ngOnInit(): void {
  }
  mainForm =  this.FB.group({
    firstName: ['', Validators.required],
    lastName:  ['',Validators.required],
    email:  ['',[Validators.required, Validators.email]],
    Password:  ['',[Validators.required,Validators.maxLength(8),Validators.minLength(5)]],
      Address :  ['',Validators.required],
  });
  get f(){
    return this.mainForm.controls;
  };

  onSubmit(){
    this.mainForm.patchValue({
      firstName : 'swikriti',
        Address:'Maharajganj',
    })
    console.log(this.mainForm.value);
    this.submitted = true;
    if(this.mainForm.valid){
      alert('success!');
    }
  }
  
}
