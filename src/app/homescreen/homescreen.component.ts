import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import Program from '../model';
@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  constructor(private authservice : HttpService) { }
  Programs: any;
  name: any;
  language: any;

  ngOnInit(): void {
    this.authservice.fetchData().subscribe
    (
     (res)=>{
      this.Programs = res;
       console.log(this.Programs);
       

     },
     (err) =>{
          console.log(err.error.message);
          
         
     }


    )
    
  }
  Search(){
    this.Programs = this.Programs.filter((res:any) =>{ 
      if(this.name!=''){
      console.log(res);
      
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    }
    else {
      // this.ngOnInit();
      this.authservice.fetchData().subscribe
    (
     (res)=>{
      this.Programs = res;
       console.log(this.Programs);
       

     },
     (err) =>{
          console.log(err.error.message);
          
         

     }


    )
     
    }
  })

  }
  

}
