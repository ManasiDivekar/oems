import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
adddata = new FormGroup({
  'title' : new FormControl(''),
  'description' : new FormControl('')
})
  constructor(private category:CategoryService) { }

  addcategory(adddata:FormGroup){
    this.category.postcategory(adddata.value).subscribe((res)=>{
      console.log(res);
      // alert("category added successfully.");
      swal("ADDED!","category added successfully","success");
    })
  }
  ngOnInit(): void {
  }

}
