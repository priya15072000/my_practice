import { Component } from '@angular/core';
import { Router } from '@angular/router';
console.log('adminlandingggggg....');


@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent {

  constructor(private router:Router){}

  lan2(){
    this.router.navigateByUrl('admin/lan2');
  }


}
