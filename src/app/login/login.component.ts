import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    emailId : new FormControl('', [ Validators.email, Validators.required]),
     password : new FormControl('', [Validators.required])
   })
  loginSubmit(){
        let result = localStorage.getItem('data');
       let obj =  JSON.parse(result|| '{}'); 
         if(this.loginForm.get('emaildId')?.value ==  obj.mailid && this.loginForm.get('password')== obj.password)
         {
           alert("You have been logged in successfully");
         }
         else{
           alert("wrong login and password");
         }
        
  }
}
