import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../Blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[];
  constructor() { }

  ngOnInit() {
  }

}
