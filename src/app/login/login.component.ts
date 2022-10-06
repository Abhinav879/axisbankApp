import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect bancking patner"   // string interpolation (ts to html{{}})
  acno=""
  psw=""


  userDetails:any={
    1000:{acno:1000,username:"Abhinav",password:1234,balance:10000},
    1001:{acno:1001,username:"Anju",password:1234,balance:20000},
    1002:{acno:1002,username:"Akhila",password:1234,balance:30000},
    1003:{acno:1003,username:"Arjun",password:1234,balance:40000},
  }


  constructor() { }

  ngOnInit(): void {
  }
  login(){
    var acnum=this.acno 
    var psw=this.psw
    var userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['password']){
        alert('login success')
      }
      else{
        alert('incurrect password')
      }
    }
    else{
      alert(" user not exist & ac number incorrect")
    }
  }
  acnochange(event:any){
    this.acno=event.target.value
  }
  pswChange(event:any){
    this.psw=event.target.value
  }
}
