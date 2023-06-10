import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  constructor(private question: QuestionService, private activatedroute:ActivatedRoute) { }
// addque =  new FormGroup({
//   'content':new FormControl(''),
//   'image': new FormControl(''),
//   'option1': new FormControl(''),
//   'option2': new FormControl(''),
//   'option3':new FormControl(''),
//   'option4': new FormControl(''),
//   'answer': new FormControl(''),
//   // 'givenAnswer': new FormControl(''),
//   'quiz' : new FormGroup({ 
//     'quiz_id' : new FormControl('')
// })
// })

staticaddque = { 
  'quiz' : {
    quiz_id :''
  } , 
  'content' : '',
  'image' : '',
  'option1' : '',
  'option2' : '', 
  'option3' : '', 
  'option4' : '', 
  'answer' : ''
}

quizid:any;
quiztitle:any;
ngOnInit(): void {
this.quizid = this.activatedroute.snapshot.params["quiz_id"];
this.quiztitle = this.activatedroute.snapshot.params["title"];
this.staticaddque.quiz['quiz_id'] = this.quizid;
}
savequestion(){
  console.log(this.staticaddque);
  this.question.postquestion(this.staticaddque).subscribe((res)=>{
    console.log(res);
    // alert("question added.")
    swal("ADDED","question added succesfully","success");
  })
}

 

}
