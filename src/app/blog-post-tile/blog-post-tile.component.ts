import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {
  Title: string;
  summary: string;

  constructor() { }

  ngOnInit() {
    this.Title = 'Title';
    this.summary = 'Here\'s the summary';
  }

}
