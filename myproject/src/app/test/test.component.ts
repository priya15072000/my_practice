import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  cars:string[]=['swift','bmw','jaguar','audi','creata'] // specific deta type ka array..
  car=this.cars[1]; //bmw
  student={name:'om' ,age:23};

 castObc='obc';castGenral='genral';castSt='st';castSc='sc';
 singing='singing';dancing='dancing';playing='playing';
 userhobbies:string[]=[];//empty array
 obc=false;st=false;sc=false;genral=false;//checked 



constructor(private router :Router){ }

back(){
  this.router.navigateByUrl('landing')
}
//radio
get(event:any){
console.log(event.target.value);
}
//button
sev(event:any){
  console.log(event);
  }
  //checkboxes
ch(event:any){
  //  event.target.value;
 this.userhobbies.push (event.target.value);

 console.log(this.userhobbies);
 console.log(event.target.value);
 }



// towaydatabinding
studentname='pppwete';employenm='diyaassssssssssssa';

// addition 
// by variable
addition(){
  let no1=20;
  let no2=30;
  var res=no1+no2;
  console.log('addition result',res);
// variable not interpolat >> {{res}}  error  property dose not exist on type test component
}
//properti se subtraction 
//dom me property  se anser interpolat kr skte h  
num1=20;
num2=30;
ans?:any;
subtraction(){
return this.ans = this.num1-this.num2;
}
//agr user se input lekar  ferfom krna h tb or result bhi interpolat krna h tb ..
nb1:any=20;
nb2:any=20;
soln?:number;
sn(){
  return this.soln=parseInt(this.nb1)+parseInt(this.nb2);
  // 20+20=40 o/p >> 22+22=2222 // jaise he user se deta  bydefalt  string formate  me ata h 
// parsint mthd use krke string ko number me convert krte h  iske liye property any bnana h // 22+22=44 
}
// ager vahi data type rkhana h tb event bind se kro 
n1=20;
n2=30 ;
fans?:number;
nn1(event:any){
this.n1= parseInt(event.target.value);
}
nn2(event:any){
  this.n2= parseInt(event.target.value);
}
finalansr(){
  return this.fans=this.n1+this.n2;
}



}