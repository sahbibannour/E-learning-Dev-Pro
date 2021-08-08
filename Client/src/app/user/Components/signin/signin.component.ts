
import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService ,private router: Router,private toastr:ToastrService ) { }
  user:any ={
    userName :'',
   password:''
 };
 resultat :any;
 ngOnInit(): void {
  
 }

 onLoginSubmit() {

 
  console.log(this.user);
   this.auth.LoginUser(this.user).subscribe(
     data => {
          this.resultat=data;
          console.log(this.resultat);
          if(this.resultat.success == true && this.resultat.user.admin ==false){
            this.showSuccessLogin() ;
            this.router.navigate(['/profil']);
          }else{
            console.log(this.resultat.user.admin);
            if(this.resultat.success == true && this.resultat.user.admin ==true){
              this.showSuccessLogin() ;
              this.router.navigate(['/dashboard']);

          }
          else {
            this.showError();
            this.router.navigate(['/']);
          }


        } 
        },
        error =>{
          console.log(error);
        }

    
  
   
      );

      }

 showSuccessLogin() {
   this.toastr.success('your login is succes', 'welecome Dev-Pro-Solutions!',{
     timeOut: 1000,
   });
 }

 showError() {
  this.toastr.error('incorrect', 'welecome Dev-Pro-Solutions!',{
    timeOut: 1000,
  });
}





}
