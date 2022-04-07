import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    emailid: new FormControl( '', [Validators.email]),
    name: new FormControl( '', [Validators.required]),
    username: new FormControl('' ,[Validators.required, Validators.minLength(8)]),
    password1: new FormControl('', [Validators.required ]),
    Male: new FormControl('', [ ]),
    Female: new FormControl('', [ ]),
    MobileNumber:  new FormControl('', [Validators.required ]),
    Degree: new FormControl('', [Validators.required ]),

   
  })
  
  register(){

    var data={
      mailid : this.registerForm.get('emailid')?.value,
      name : this.registerForm.get('name')?.value,
      password:  this.registerForm.get('password1')?.value,
      username : this.registerForm.get('username')?.value,
      Male :  this.registerForm.get('Male')?.value,
     Female: this.registerForm.get('Female')?.value,
     Mobile: this.registerForm.get('MobileNumber')?.value,
     Degree : this.registerForm.get('Degree')?.value,

     
    }
    localStorage.setItem('data', JSON.stringify(data));
 
  console.log(data);
  
    
  }
}
