import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
import { QuizeService } from 'src/app/shared/quize.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {

// updateque =  new FormGroup({
//   'question_id' : new FormControl(''),
//   'content': new FormControl(''),
//   'option1' : new FormControl(''),
//   'option2' : new FormControl(''),
//   'option3' : new FormControl(''),
//   'option4' : new FormControl(''),
//   'answer' : new FormControl(''),
//     'image' : new FormControl(''),
//   'givenAnswer' : new FormControl(''),
//   'quiz' : new FormGroup({
//   //   'quiz_id' : new FormControl('')
//   })
// })

update:any  ={
  question_id : '',
  content :  '',
  option1 :  '',
  option2 :  '',
  option3 :  '',
  option4 :  '',
  answer : '',
}


  constructor(private question:QuestionService , private activatedroute:ActivatedRoute) { }
getid:any;
  ngOnInit(): void {
    this.question.getquestionbyid(this.activatedroute.snapshot.params['question_id']).subscribe((res)=>{
      this.update = res;
      console.log(res);
    })
  }

// allquize:any;
//   getquiz(){
//     this.quize.getquizeapi().subscribe((res)=>{
//       this.allquize=res;
//       console.log(this.allquize);
      
//     })
//   }
updatequestion(){
  this.question.putQUestion(this.update).subscribe((res)=>{
    console.log(res);
    // alert("updated.")
    swal("UPDATED" ,"question got updated","success");
    
  })
}
}
