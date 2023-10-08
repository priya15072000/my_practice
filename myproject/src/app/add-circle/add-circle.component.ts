import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-circle',
  templateUrl: './add-circle.component.html',
  styleUrls: ['./add-circle.component.scss']
})
export class AddCircleComponent {

  constructor(private router:Router){ }


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
  
  back(){

    this.router.navigateByUrl('landing')
  }


}
