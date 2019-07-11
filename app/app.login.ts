import {Component} from '@angular/core'
import{ Router} from '@angular/router';
//import{ActivatedRoute,Params} from '@angular/router'
@Component({
    selector:'log-comp',
    templateUrl:'login.html'
})

export class LoginComponent {
    constructor(private router:Router){}
    flag:number=0;
    userName:any;
    password:any;

    login(){
        this.flag=0;
        if(this.userName=="student" && this.password=="st@123"){
            
           this.flag=1;
           this.router.navigate(['show',this.userName,this.password]); 
          }
         
    if(this.flag==0)
    {
        alert("Invalid User id, Please tru again......");
    }     
    }
}