import {
  Component, Input
} from '@angular/core';
import { NewsData } from '../news-data';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  @Input()
  public news: NewsData;

  @Input()
  public index: number;

  constructor(
    private newsService: NewsService
  ) { }

  remove() {
    this.newsService.removeNews(this.news.id);
  }

  voteUp() {
    this.newsService.voteUp(this.news.id);
  }

  voteDown() {
    this.newsService.voteDown(this.news.id);
  }

}