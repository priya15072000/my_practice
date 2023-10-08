import { Component } from '@angular/core';
import { Router } from '@angular/router';

console.log('landingggggg22222....');


@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.component.html',
  styleUrls: ['./landing2.component.scss']
})
export class Landing2Component {
  constructor(private router:Router){}

  adminLanding(){
    this.router.navigateByUrl('admin/adminLanding');
  }
}
