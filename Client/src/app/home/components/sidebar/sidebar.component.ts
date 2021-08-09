import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 name=localStorage.getItem("username");
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    
  }



  logout(){
    localStorage.clear();
    this.router.navigate(['/']);

  }
}
