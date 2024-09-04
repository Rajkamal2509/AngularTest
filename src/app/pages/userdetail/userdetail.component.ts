import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: ' app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent {
@Input() userDetail:any
@Output() editUser:EventEmitter<any>=new EventEmitter<any>();
constructor(){

}

ngOnInit(){
  console.log(this.userDetail)
}
edit(value:any){
  console.log(value);
  this.editUser.emit(value)
}

}
