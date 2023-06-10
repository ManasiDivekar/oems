import { Component, OnInit } from '@angular/core';
import { QuizeService } from 'src/app/shared/quize.service';

@Component({
  selector: 'app-allactivequiz',
  templateUrl: './allactivequiz.component.html',
  styleUrls: ['./allactivequiz.component.css']
})
export class AllactivequizComponent implements OnInit {

  constructor(private quiz:QuizeService) { }
allquiz : any;
  ngOnInit(): void {
    this.quiz.getallactivequiz().subscribe((res)=>{
     this.allquiz=res;
     console.log(res);
     
    })
  }

}
