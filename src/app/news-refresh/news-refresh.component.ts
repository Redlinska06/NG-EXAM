import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-refresh',
  templateUrl: './news-refresh.component.html',
  styleUrls: ['./news-refresh.component.css']
})
export class NewsRefreshComponent implements OnInit {

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }

  refresh() {
    this.newsService.onChange.emit();
  }
}
