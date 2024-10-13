import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, delay, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  implements OnInit {

signForm:FormGroup|any
login:boolean=false
 observable1$ = of('A')  // emits after 1 second
 observable2$ = of(1, 2, 3) // emits values after 2 seconds
constructor(private fb:FormBuilder,private route:Router){}


ngOnInit(): void {
 this.signForm=this.fb.group({
  username:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required]),
 })


 combineLatest([this.observable1$, this.observable2$]).subscribe(([val1, val2]) => {
  console.log(val1, val2); // Prints the latest emitted values
  });

  forkJoin([this.observable1$, this.observable2$]).subscribe(([val1, val2]) => {
    console.log(val1, val2); // Prints the latest emitted values
    });
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
