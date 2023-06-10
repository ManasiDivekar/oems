import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private category:CategoryService) { }
 allcategory:any;
  getcategory(){
    this.category.getallcategory().subscribe((res)=>{
      this.allcategory=res;
      console.log(this.allcategory);
    })
  }

  deletecat(id:any){
    this.category.deletecategory(id).subscribe((res)=>{
      console.log(res);
    //  alert("category got deleted.");
    swal("DELETED","data got deleted","success");
    window.location.reload();
    })
  }
  ngOnInit(): void {
    this.getcategory();
  }

}


