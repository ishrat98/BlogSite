import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../Blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost;

  fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;

    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);

  }

  showFullSummary() {
    this.post.summary = this.fullSummary;

  }

}
