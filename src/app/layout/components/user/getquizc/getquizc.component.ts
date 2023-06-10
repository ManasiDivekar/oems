import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizeService } from 'src/app/shared/quize.service';

@Component({
  selector: 'app-getquizc',
  templateUrl: './getquizc.component.html',
  styleUrls: ['./getquizc.component.css']
})
export class GetquizcComponent implements OnInit {

  constructor(private quize:QuizeService, private activatedroute:ActivatedRoute) { 
    // this.catid = this.activatedroute.params.subscribe();
    // console.log(this.catid);
    // this.quize.getactivequizeofcategory(this.catid).subscribe((res)=>{
    //   this.quizcat = res;
    //   console.log(res);
    // })
  }
quizcat:any;
catid:any;
  ngOnInit(): void {
    this.activatedroute.params.subscribe((res:any)=>{
      this.catid =res;
      console.log(res.category_id);
      this.quize.getactivequizeofcategory(this.catid.category_id).subscribe((res)=>{
        this.quizcat = res ;
        console.log(res);
      })
    })
  }

}
// this.cattitle = this.activatedroute.snapshot.params["title"];