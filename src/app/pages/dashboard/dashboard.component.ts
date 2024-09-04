import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
declare var $: any
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private formBuilder:FormBuilder){ }

  // @ViewChild('firstnames') firstName!:ElementRef
  @ViewChildren('firstnames') firstName!:QueryList<ElementRef>
  registerForm:FormGroup|any
  userDetails:any=[
    {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      email: 'john.doe@example.com',
      phonenumber: '123-456-7890'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'female',
      email: 'jane.smith@example.com',
      phonenumber: '098-765-4321'
    }
  ]
  update:boolean=false;
  // items: FormArray |any;
  register:boolean=false;
  editUser:any
  ngOnInit() {

    this.registerForm=this.formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      birthday:[null,[Validators.required]],
      gender:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      phonenumber:[null,[Validators.required,Validators.minLength(10)]],
      experience: this.formBuilder.array([
        this.createItem()
      ])
  })
  
  
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  }
  addItem(): void {
    // this.items = this.registerForm.get('items') as FormArray;
    this.experience.push(this.createItem());

    
  }
  ngAfterViewInit() {

    let a=this.firstName.forEach((i:any)=>{
      console.log(i.nativeElement.value)
    })
    console.log(this.firstName);
  }
  createItem(value?:any,pa?:any): FormGroup {

    if(pa=='edit'){
      return this.formBuilder.group({
        companyName: [value.companyName, Validators.required],
        experience: [value.experience, [Validators.required]],
        skills: [value.skills, [Validators.required]]
      });
    }
    else{
      return this.formBuilder.group({
        companyName: ['', Validators.required],
        experience: [null, [Validators.required]],
        skills: [null, [Validators.required]]
      });
    }
    
  }

  get experience(){
    return this.registerForm.get('experience') as FormArray;
  }
  get firstname(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName') 
  }
  get birthday(){
    return this.registerForm.get('birthday') 
  }
  get gender(){
    return this.registerForm.get('gender') 
  }
  get email(){
    return this.registerForm.get('email') ;
  }

  get phonenumber(){
    return this.registerForm.get('phonenumber') ;
  }
  registerSubmit(){
    let a=this.firstName.forEach((i:any)=>{
      console.log(i.nativeElement.value)
    })
    console.log(this.firstName);
    if(this.registerForm.invalid){
      this.register=true
      return;
    }
    else{
      localStorage.setItem('value',JSON.stringify(this.registerForm.value))
      this.userDetails.push(this.registerForm.value)
      this.registerForm.reset()
      this.experience.clear()
      this.experience.push(this.createItem())
      this.register=false
    }
  }
  removeitem(value:any){
 
    if (value!=0){
      this.experience.removeAt(value)
    }
  
    this.experience.removeAt(this.experience.length-1);
  }
  edit(val:any){
    this.registerForm.patchValue({
      firstName:val.firstName,
      lastName:val.lastName,
      birthday:val.birthday,
      gender:val.gender,
      email:val.email ,
      phonenumber:val.phonenumber

    })

    this.update=true
    this.experience.clear()
    val.experience.forEach((element:any) => {
     this.experience.push(this.createItem(element,'edit'))
    });
  }
  updatedetail(){
  // let index=this.userDetails.findIndex((i:any)=>i.phonenumber==value.phonenumber)
  // console.log(index);
  // this.userDetails[index]=this.registerForm.value
  
  }
  edituserdetail(value:any){
    console.log(value);
    this.edit(value)
  }
}
