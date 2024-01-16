import { Component } from '@angular/core';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
BlogPostService

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  constructor(private blogPostService: BlogPostService){}
addnew() {
    const newblog = {
      title: 'New Title',
      body: 'New Body'
    };
    this.blogPostService.addblog(newblog);
  };
}

