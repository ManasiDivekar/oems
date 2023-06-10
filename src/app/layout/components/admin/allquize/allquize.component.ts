import { Component, OnInit } from '@angular/core';
import { QuizeService } from 'src/app/shared/quize.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-allquize',
  templateUrl: './allquize.component.html',
  styleUrls: ['./allquize.component.css']
})
export class AllquizeComponent implements OnInit {
allquize:any
  constructor(private quize:QuizeService) {
    this.getallquize();
   }

  getallquize(){
this.quize.getquizeapi().subscribe((res)=>{
  this.allquize=res;
  console.log(this.allquize);
})
}
quizedelte(id:any){
  this.quize.deletequize(id).subscribe((res)=>{
console.log(res);
// alert("quize got deleted.")
swal("DELETED","quiz got deleted","success");
window.location.reload();
  })
}
  ngOnInit(): void {
  }

}
