import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private auth:AuthService ,private toastr:ToastrService  ) { }
   user:any ={
     userName:'',
    email :'',
    password:''
  };
  resultat :any;
  ngOnInit(): void {
   
  }

  onRegisterSubmit() {
 
    console.log(this.user);

    this.auth.ResgisterUser(this.user).subscribe(
      data => {
           this.resultat=data;
           if(this.resultat.success){
             this.showSuccessRegister() ;
           }
            
         },
         error =>{
           console.log(error);
         }

     
   
    
    );
  }



  showSuccessRegister() {
    this.toastr.success('your register is succes', 'welecome Dev-Pro-Solutions!',{
      timeOut: 2000,
    });
  }

}
