import { Component, OnInit, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NgFor } from '@angular/common';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [HomeComponent, NgFor, RouterModule ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
  providers: [BlogPostService]
})
export class BlogsComponent implements OnInit{
  blogs:any;
  constructor(private blogpostservice : BlogPostService){
    this.blogs = blogpostservice.bloglist
  }
 ngOnInit(): void { 
   
 }
}
