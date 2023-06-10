import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';
import { QuizeService } from 'src/app/shared/quize.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-updatequize',
  templateUrl: './updatequize.component.html',
  styleUrls: ['./updatequize.component.css']
})
export class UpdatequizeComponent implements OnInit {
updatedata = new FormGroup({
  'quiz_id' : new FormControl(''),
  'title' : new FormControl(''),
  'description' : new FormControl(''),
  'maxMarks' : new FormControl(''),
  'numberOfQuestions' : new FormControl(''),
  'active' : new FormControl(''),
  'category' : new FormGroup({
    'category_id': new FormControl('') 
  })
})
  constructor(private quiz:QuizeService,private category:CategoryService,private activatedroute:ActivatedRoute) { 
    this.getcategory();
  }
quizcat:any
getcategory(){
  this.category.getallcategory().subscribe((res)=>{
this.quizcat=res;
console.log(this.quizcat);
  })
}

updatequize(data:FormGroup){
  console.log(data.value);
  this.quiz.putquize(data.value).subscribe((res)=>{
    console.log(res);
    // alert("updated.")
    swal("UPDATED","quiz got updated","success");
  })
}
title:any;
paramdata:any;
  ngOnInit(): void {
  this.activatedroute.params.subscribe((res)=>{
    this.paramdata=res;
    console.log(this.paramdata.quiz_id);
    this.quiz.getquizeid(this.paramdata.quiz_id).subscribe((res:any)=>{
      this.title=res;
      console.log(res);
      this.updatedata.setValue(res);
    })
  })
  }

}
