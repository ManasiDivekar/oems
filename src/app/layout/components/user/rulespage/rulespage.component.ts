import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
import { QuizeService } from 'src/app/shared/quize.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-rulespage',
  templateUrl: './rulespage.component.html',
  styleUrls: ['./rulespage.component.css']
})
export class RulespageComponent implements OnInit {

  constructor(private quiz:QuizeService, private question:QuestionService, private activatedroute:ActivatedRoute, private route:Router) { }
  quizid:any; 
  quizcontent:any;
  
  ngOnInit(): void {
    this.quizid = this.activatedroute.snapshot.params['quiz_id']
    console.log("this is quiz id",this.quizid);
    this.quiz.getquizeid(this.quizid).subscribe((res)=>{
   this.quizcontent= res;
      console.log(res);
    })
  }

  submitexam(){
    swal({
      title:"Are you sure?",
      text:"your exam is going to start.",
      icon:"warning",
      buttons:["Don't start","Start exam"]
    }).then((result)=>{
      if(result){
      this.route.navigate(['/user/startexam/',this.quizid]);
      }
      else{
       swal("Read instruction once again.")
      }
    })
  }

}
