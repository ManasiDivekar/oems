import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  getid:any;
updatedata =  new FormGroup({
  'category_id' : new FormControl(''),
  'title' : new FormControl(''),
  'description' : new FormControl('')
})
  constructor(private category:CategoryService, private activatedroute:ActivatedRoute) {
    
  }
  updatecategory(updatedata:FormGroup){
    this.category.putcategory(updatedata.value).subscribe((res)=>{
      console.log(res);
      // alert("data got updated successfully.")
      swal("UPDATED!","category got updated","success");
      
    })
  }
  title:any;
  ngOnInit(): void {
    this.activatedroute.params.subscribe((res)=>{
      this.getid=res
      console.log(this.getid.category_id);
      this.category.getcategoryid(this.getid.category_id).subscribe((res:any)=>{
        this.title=res;
        console.log(res);
        this.updatedata.setValue(res);
    })
   })
  }

}
