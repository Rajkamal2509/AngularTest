import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncpipeService } from 'src/app/services/asyncpipe.service';

@Component({
  selector: ' app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent {

  details: any; // Observable to hold the posts data
@Input() userDetail:any
@Output() editUser:EventEmitter<any>=new EventEmitter<any>();
constructor(private aysc:AsyncpipeService){}

ngOnInit(){
  console.log(this.userDetail)



  this.details=this.aysc.getDetails()


  console.log(this.details);
  
}
edit(value:any){
  console.log(value);
  this.editUser.emit(value)
}






}
