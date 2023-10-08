import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private router :Router){}

  home(){
this.router.navigateByUrl('home')

  }
  addCircle(){
    this.router.navigateByUrl('addCircle')
  }
  test(){
    this.router.navigateByUrl('test')
  }

//3-10-23
  //student module ke liye 
  studentModule(){
    this.router.navigateByUrl('studentmodule/studentHome')
  }
//module ke liye (sbse phle module name/us module ke rotingpath ka eczcly nm)
// (' phla path jayega lazy loding ka  means is module ke main root module ka path   /dusra jayega us  ke component ke module ka ')

adminmodule(){
  this.router.navigateByUrl('admin/adminLanding2')
}



}
