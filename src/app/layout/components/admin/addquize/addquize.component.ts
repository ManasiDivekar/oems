import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import { QuizeService } from 'src/app/shared/quize.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-addquize',
  templateUrl: './addquize.component.html',
  styleUrls: ['./addquize.component.css']
})
export class AddquizeComponent implements OnInit {
quizcat:any;
category=[] ;
  constructor(private quize:QuizeService,private categoryser:CategoryService) {
    this.allcategory();
   }

// adddataquize = new FormGroup({
//   'title' : new FormControl(''),
//   'description' : new FormControl(''),
//   'maxMarks' : new FormControl(''),
//   'numberOfQuestions' : new FormControl(''),
//   'active' : new FormControl(''),
//   'category' : new FormControl('')
// })
addquizedata = {
  'title' :'' ,
  'description' : '',
  'maxMarks' : '',
  'numberOfQuestions' : '',
  'active': '',
  'category' :{
    'category_id' : ''
  }
}

allcategory(){
  this.categoryser.getallcategory().subscribe((res)=>{
    this.quizcat=res;
    console.log(this.quizcat);
  })
}
savedata(){
  console.log(this.addquizedata);
  this.quize.postquize(this.addquizedata).subscribe((res)=>{
    console.log(res);
    // alert("quiz saved successfully.")
    swal("ADDED","quiz added successfully","success");
  })
}
  ngOnInit(): void {
  }

}
