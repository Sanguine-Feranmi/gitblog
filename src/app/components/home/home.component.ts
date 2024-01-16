import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewPostComponent } from '../../shared/new-post/new-post.component';
import { BlogPostService } from '../../services/blog-post/blog-post.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgFor, RouterModule, NewPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [BlogPostService]
}) 
export class HomeComponent implements OnInit{
  datas :any[] =[]
  constructor(private blogPostService: BlogPostService ){
    // let blogPostService = new BlogPostService()
    this.datas = blogPostService.bloglist
  }
  ngOnInit(): void {

  }
  addNewData() {
    const newblog = {
      title: 'New Title',
      body: 'New Body'
    };
    this.blogPostService.addblog(newblog);
  }
  delete(blog:any){
    let index = this.datas.indexOf(blog)
    this.datas.splice(index, 1)
  }
}
