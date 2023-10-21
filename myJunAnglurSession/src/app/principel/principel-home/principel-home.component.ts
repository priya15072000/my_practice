import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principel-home',
  templateUrl: './principel-home.component.html',
  styleUrls: ['./principel-home.component.scss']
})
export class PrincipelHomeComponent {

  constructor(private router:Router){}

  signup(){
    this.router.navigateByUrl('principelModule/signup')
  } 
  login(){
    this.router.navigateByUrl('principelModule/login')
    
  }
}
