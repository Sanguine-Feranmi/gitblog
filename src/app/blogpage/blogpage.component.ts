import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../services/blog-post/blog-post.service';

@Component({
  selector: 'app-blogpage',
  standalone: true,
  imports: [NgIf],
  templateUrl: './blogpage.component.html',
  styleUrl: './blogpage.component.css'
})
export class BlogpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:BlogPostService){  }
  getblogId:any;
  blogdata:any;
  
  ngOnInit(){
    this.getblogId = this.param.snapshot.paramMap.get('id')
    console.log(this.getblogId, 'getmenu');
    if(this.getblogId)
    {
      this.blogdata = this.service.bloglist.filter(((value: { id: any; }) =>{
        return value.id == this.getblogId;
      }))
    }
  }
}
