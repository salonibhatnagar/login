import {Component, OnInit} from '@angular/core'

import{ActivatedRoute,Params} from '@angular/router'
@Component({
    selector:'show-comp',
    templateUrl:'welcome.html'
})

export class WelcomeComponent implements OnInit{
    constructor(private _activate:ActivatedRoute){}

    
    data:any;
    data1:any;
ngOnInit(){
   
   // this.myservice.getMessage().subscribe((data1:any)=>this.empall=data1);
   // this.myservice.getMessage().subscribe((message)=> this.empall = message)
  // this.myservice.getMessage().subscribe((message)=> this.empall.push(message));
  this.data=this._activate.snapshot.params['id'];
  this.data1=this._activate.snapshot.params['pass'];
  
  
}

}