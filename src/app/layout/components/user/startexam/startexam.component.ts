import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-startexam',
  templateUrl: './startexam.component.html',
  styleUrls: ['./startexam.component.css']
})
export class StartexamComponent implements OnInit {
  isSubmited = false;
  selectans:any;
  timer: any;
  marksGot: any = 0;
   correctAnswers = 0;
   attempted = 0;
quizid:any
  constructor(private question:QuestionService, private activatedroute:ActivatedRoute) { }
  


allquestion:any;
  ngOnInit(): void {
    this.quizid= this.activatedroute.snapshot.params['quiz_id'];
    this.question.getallquesforuser(this.quizid).subscribe((res)=>{
      this.allquestion = res;
      console.log(res);
      this.timer = this.allquestion.length *(1/2) *60;
      console.log(this.timer);
      this.startTimer();
    })
  }
  startTimer() {
    let time:any = window.setInterval(() => {
      if (this.timer <= 0) {
        this.directsubmit();
        clearInterval(time)
      } else {
        this.timer--;
      }
    }, 1000)
  }

  getFormatedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm}:${ss}`;
  }

  quizsubmit(){
    swal({
      title: "Are you sure?",
      text: "Once submited, you will not be able to recover this exam!",
      icon: "warning",
      buttons:["cancel","submit"],
      dangerMode: true
    })
    .then((result)=>{
      if(result){
        swal("your exam get saved successfully!", {
          icon: "success",
        });
        this.directsubmit();
       }else{
        swal("You can start your exam.");
       }
    })
  }

  
  directsubmit(){
  this.question.directsubmitques(this.allquestion).subscribe((res:any)=>{
    console.log(res);
    this.attempted = res.attempted;
      this.correctAnswers= res.correctAnswers;
      this.marksGot = parseFloat(Number(res.marksGot).toFixed(2));
      this.isSubmited = true;
    
  })
  }

  printpage(){
    window.print();
  }
}
