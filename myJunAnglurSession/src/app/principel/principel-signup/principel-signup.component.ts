import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principel-signup',
  templateUrl: './principel-signup.component.html',
  styleUrls: ['./principel-signup.component.scss']
})
export class PrincipelSignupComponent {

principelForm! : FormGroup;

datePattern= /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/\d{4}$/;


constructor(private fb : FormBuilder){}

ngOnInit(){
  console.log('init...');
  this.formDetails();
}

formDetails(){

  this.principelForm = this.fb.group({
    userName :['',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]],

     emailId :[,[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],

    // mobileNumber : ['+91',[Validators.required,Validators.maxLength(13)]]
    //  mobileNumber: ['+91',[Validators.pattern('[0-9+]*')]]
    mobileNumber: ['',[Validators.pattern('[0-9+]*')]],

    //age should be above 18 and bellow 60 :-
    //birth date dali to age automaticaly fill vhayla phij
    
    
    // dob :['',[Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/\d{4}$/)]]
  // ragex pattern fordob: datepattern : /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/\d{4}$/
 
 dob:['',[Validators.pattern(this.datePattern)]],
age:[null,[]],

TC:['',[Validators.requiredTrue]], 
gender:[]

  }) 
}
  //form ko builder me define krna h 
//FormBuilder/constuctor me builder import add krna pdta h ..

// fb jo builder ki class ko point krta h iske ander alg alg mtd hoti h usme ka select kiy agroup a accept krta h object 
// group a inbuilt mthd h jo formbuilder pclass ke ander axixst krti h iska use krke apn ak ak input filed ka controll define krenge 
// controll mtlb  a jo formcontrolname   dala h isko define krenge abhi
// a object accepyt krti h mthd >. iske ander jayega phla jo userName likha h o abhi a aary ko accept krta h []iske ander ager value dalni h dalo ni to empty rkho'' , 
// 1st oth endex pe value rhti h us pertikulr input box ki ng secnd arry[]rhta h jiske andr apn validations lgate h  jaise validation lgane ke liye yaha validaters.required/minlenth/maxlength  jo kuch bhi h o 
//  is validaters ko phle import krna pdta h 
//  mtlb validation ke liye  ary me [first value '',or secnd iska valideters ]
// a siska syntax h  a validation sb arr ke liye h biyond 10 charatr apn eeror show krenge 
// recap3735
// 32/37



isGenderSelected:boolean=false;
submit(){

  let gender= this.principelForm.value.gender
 
  if(gender){
    console.log('form data', this.principelForm.value);
  
  }
  else{
   this.isGenderSelected=true
    return
  }

 }

 age=20;
todayDate = new Date();
userage:any;

calyear(){
  let dobfiledvalue = this.principelForm.value.dob;
  let todayfullyear = this.todayDate.getFullYear();
 //console.log(todayfullyear); 
 //debugger se bhi check krskte h 
  let spliteddate = dobfiledvalue?.split('/');
  let usersfullyear = spliteddate[2];
  
this.userage= todayfullyear -usersfullyear  ;
  
}

gender(){
  this.isGenderSelected = false;
}

showPass=false;

showPassword(){
  console.log('showpassswor...');
  // this.showPass = true;// ye bs show krega firse bulet me lana h to
  this.showPass= ! this.showPass;//toggel ifect se
  
  
}

}
