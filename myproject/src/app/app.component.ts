import { Component } from '@angular/core';//impport section 
import { Router } from '@angular/router';
type NewType = Router;

@Component({   // @ component derective / decoretor
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{// class to write code here
  title = 'my first appication'; //1.
       




  city? : string ; //dec..
  city1 : string = 'pune';//dec+def..
  city4 = 'mumbai';
   navv ='piiya'; //test case no.1
constructor(private router:Router){}    // to inject dependencies


   no1 = 10;
   no2 = 20 ;

   no3 = "30";//string vala no.
/* 14 48............................
//let/var/const city='pune';

  //property 
  // >> bydefault public hota h  if u required make it privat as well
  // aditional deta type any accept all type value boolian string number all  means it
  //  should accept string it should accept boolean and it should accept numaral value also..
 //city:any=234556;
city1?:string; //error use exlametri or quemarks!/?
 
 // error : Property 'city1' has no initializer and is not definitely assigned in the constructor.

  city2!: string;//l ! ?> future me iske andr value ane vali h
  //2014 me add hua h ! ,?
  city3: string = 'piu'; // dec+dif properties  not required !or? marks.

  
*/


  // property : run time me memory me space allocate kr rhe h iska 2 store specefic value  us perticuler deta type ka
  //scope component level kisi bhi file me access kr skte h ts /html 

  // mumbai value ui me show krna h yaha ki to interpulation  nam ka concept 
  // 
  //jb na pta ho ane vala deta kya hoga tb use it any



  // constructor() {}; // to inject dependencies

  // life cycle hooks

  //functions



/* 
type script me jayega logical code ...
kuch variable h  title 
isko ts me goloble variable define krte ho without letvarconst to usko property bola jata h 
  ts ka padho how decleare property 
  how define how 2 acses using this keyword 

  ye .ts file h sara ts internaly compile hoke js me convert hota h fir compile hota h.

  isme 
  phle imopoert
  than componet decoreter 
   fir export >>
   isme phle propertyes 
   constrctor (){

   }
   //life cycle hooks 
   //functions


    mvc pattern?>>
   mvc part >> modul wive controll .> viwe >> html ,templet >>html,
   css >> beheviour . butiefication , 
   controll mtlb jahase logical part jahase pura ui controll hoda that is the .ts file

*/

/*
ts  >> base..js ka superset typescript...

if else, arrayitration mthd,sring arry itration map filter foreach switch  arry lenth property , number string mthod  
a sb chlegi yahape  property
aditional property  hogya function likhana dyrect dyrect 
arroopretor vriable fun ke andr mjorly function ke ander html screen me acses hoga deta 
component klevel defrence hota h isme ts me


torialtspoint >> fun ,arry,string , obj,propertys vriablesss

property kaise define krte h 
>> */

/* 
    11-09-2023  { toipc : string interpulation}

property interpulation 
 html file>> jab bhi property ko  ase
  <p>{{city4}}</p> 
  tag ke adndr interpulation me dalte h to o dyrectly ui/dom me show ho jata h ya use accses ase krte h 
  ts. file me dec+def kro or html. file me use kro.....

*/
//function
learningInterpolation(){ //void: default type of function 
//return 'rajguru';// string value
 //return 200;//arithemetic value
// return true; // boolean value
 return this.city1;

}

/*






*/
// property binding 
data1=40;

//Q.i/w  define empty array ?
carr:any[]=[];
car1:string[]=[];
cars:string[]=['swift','bmw','jaguar','audi','creata'] // specific deta type ka array..
car=this.cars[1]; //bmw


student ={name:'om' ,age:23};

//cars :string[]=[657767type no is not assinable to typ string ];

//radio
genderfemale=false;
gendermale=false;
genderother=false;
//check ni dikhega a false se jaise click kroge rediobTN   pr to check hojayega..

genderf='Female' ;
genderm='Male';
gendero='other';

gen(data?:any){
  console.log('data',data?.target.value);//eror solve krne ke liye pass krte time bhi optional? bnana h.

}

// 13-09-23   
//checkboxes
userHobbies:string[]=[];//impty array...

paintinghobby='Panting';
singinghobby='singing';
travelinghobby='traveling';
dancinghobby='dancing';

favCountry='india';




hobbies(event :any){
  console.log(event.target.value);

  //thise keyword use >>js: this keyword is  gatting used  inside  object to point object's key
   //ts: this keyword is use to point globle properties it is also used in a functions to fatch value of globle properties .
   
   //  angular ;:  agr kisi globle property ko featch krna hoto use krte h ya kisi fun me se dusre fun ko call krna ho to use krte h.
 // js  obj. ke sath use krte h  concadinat krne ke liye  fulname :jon deo
  
 this.userHobbies.push(event.target.value);
  console.log(this.userHobbies);
  
  console.log(this.favCountry);//india
  
  this.favCountry='maletia';
  console.log(this.favCountry);//maletia

  //cascading of function 
  //fun ke ander se fun callkrna

   //this.gen(data:any);//error paramitrised fun  ko call fun ke ander 
   //iske liye iske argument ko optional paramitrised bnate h.. banana pdega
   this.gen();//js me dyrect direct gen() se call krte h

   //agr apko fun property same scrin me use krna hoga golobly to  this keywrd use krte  h 

  

  }

  favFruit='apple';
  fruit(){
    console.log(this.favFruit);//propertyy fun ke ander access krne ke liye this keyword lgana jruri h.
    //fun call krna h
    this.learningInterpolation();
    
  }
  
  //14-09-23
  //event binding  // check box ki chek ki hui jo koi valu h usko pta krne ke liye use hota h
  submit(event :any){

    console.log(event);
    
  }

  //2way data binding : 
  // dom me deta change ho to usko cath krne ke liye  iska use h 
  studentname:any ='priyankag';

  empName='fgdhygkyutyjretgfxh';
  //deta bindin khatm
  
  
// 16-09-23
//VARIABLE property me difference 
addition(){
  let no1=20;
  let no2=30;
  var res=no1+no2;
  console.log('addition result',res); // addition by variable
  
  
  //jase hi fun me variable ka  scope  jaise fun  khtm hota h vaise hi iska scope kill ho jata h or ye firse undefine sho krta h 
  //mtlb fun ke bahar isko interpolat nahi krskte h 

}

// addition by property

num1:number=10;
num2:number=20;
ress?:number;
 
//any ko chodker baki sabh deta type ke liye agr valu in future ane vali h optional bnana pdta h !/?

Addition(){
  this.ress=this.num1+this.num2; /// addition by property
  console.log('ress',this.ress);
 
//this key word is manditry to access property with in same file
}
//isko dom me show krne ke liye in html {{ress}}-->>


//detabasese ayega deta ya useer se satitic nahi ayega
//user se deta lena h tb
Nm1:any=20;
Nm2:any=20;
resss?:number ; 
Adddition(){
  this.resss= parseInt(this.Nm1) + parseInt(this.Nm2);
  console.log('resss',this.resss);
}


//propert kohtml me define krke ts me use nahi kr skte h uska component levtscope ni bnega acses nhi ho pyegi

// 2trika
n1:number=10;
n2:number=10;
ADDITION1(event:any){
 this.n1=parseInt(event.target.value);
}
ADDITION2(event:any){
  this.n2=parseInt(event.target.value);
 }//event name hardcoded h  jo bhi lena ho le skte h
 rs!:number ; 
 Addditionnnnn(){
   //this.ress=parseInt(this.Num1)+parseInt(this.Num2);
   this.rs=this.n1+this.n2;
   console.log('resss',this.rs);
}
//17-09-23
//main1divfresh
hadding:string='my first web page';

//variable -  let var const ke sath ...
hadding1(){
  let pageTitle ='my first page'
}

//property kb bnaoge jb dom me data show krna h ya kisi fun ke ander fech krah deta tb..

//two way data binding 
myCityName?:string;
//

/* 
addnumber1?:number;
addnumber2?:number;

additionOfNumbers(){
  this.addnumber1+this.addnumber2
} 

/// specificaly undefine vala errror dega 
*/

addnumber1:any;
addnumber2:any;
addResult:any;

additionOfNumbers(){
  this.addResult = this.addnumber1 + this.addnumber2
}
//19-09-23

circles:{ id:number, isSelected:boolean, backgroundColor:string }[]=[];
nextCircleId=1;
selectedCircle ?:{ id:number, isSelected:boolean, backgroundColor:string };


toggleSelectCircle(circle:{id:number , isSelected:boolean, backgroundColor:string})
{
console.log(circle);
console.log(this.selectedCircle);
if (circle === this.selectedCircle) {
  circle.isSelected=!circle.isSelected;
  circle.backgroundColor== 'blue'? circle.backgroundColor='gray':circle.backgroundColor='blue'
}else
{
  if(this.selectedCircle){
    this.selectedCircle.isSelected=false;
    this.selectedCircle.backgroundColor='blue';

  }
  circle.isSelected=true;
  circle.backgroundColor='gray'
  this.selectedCircle=circle;
}
}  

addCircle(){
  const newCircle={
  id:this.nextCircleId,
  isSelected:false,
  //backgroundcolor:this.nextCircleId % 2 === 0 ? 'blue' : 'red'
backgroundColor:'blue'  
};
this.circles.push(newCircle);
this.nextCircleId++;
} 


// a rate a mosm nadi kya a kya bat h ajj 

 
// 1132
landing() {
  this.router.navigateByUrl( 'landing')
} 
//this .router point consterctor meki class ko or navigateByUrl() a inbuilt fun h jo paramitrised h ike andr path pass krna pdega  
// 'costmvalue path'
//redirection vala code always routing module .ts me likhna hota h 
//const routes: Routes = []; yaha pr

// router autlate ak dairectiv h  jo html ki file me  iska use redirectin perpos h
// <router-outlate></router-outlate> issee html m ni likh to 1 dairectiv se dusre me move ni ho skte.
// http://localhost:4200/landing:---- http://localhost:4200 a itna base url h or jase he ak screen se dusry pe upend hota jayega to iske samne/module name than component 
// ab agr 


}








