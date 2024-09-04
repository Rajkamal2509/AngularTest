import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  implements OnInit {

signForm:FormGroup|any
login:boolean=false
constructor(private fb:FormBuilder,private route:Router){}


ngOnInit(): void {
 this.signForm=this.fb.group({
  username:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required]),
 })
}

get username(){
  return this.signForm.get('username')
}
get password(){
  return this.signForm.get('password')
}
onsubmit(){
  if(this.signForm.invalid){
    this.login=true
    return 
  }
  else{
    this.route.navigate(['dashboard'])
  }
}






}
