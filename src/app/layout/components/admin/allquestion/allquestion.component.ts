import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-allquestion',
  templateUrl: './allquestion.component.html',
  styleUrls: ['./allquestion.component.css']
})
export class AllquestionComponent implements OnInit {
allquestion:any;
quizid:any;
quiztitle:any;
  constructor(private question:QuestionService , private activatedroute:ActivatedRoute) {
   this.quizid = this.activatedroute.snapshot.params['quiz_id'];
  this.quiztitle = this.activatedroute.snapshot.params['title'];
    this.question.getallquestion(this.quizid).subscribe((res)=>{
      this.allquestion=res;
      console.log(res);
    })
   }

  deleteque(id:any){
    this.question.deletequestion(id).subscribe((res)=>{
      console.log(res);
      // alert("question got deleted");
      swal("DELETED","question got deleted","success");
      window.location.reload();
    })
  }
  ngOnInit(): void {
  }

}
