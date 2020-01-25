import {
  Component, OnInit
} from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {
  title: string;
  imageUrl: string;
  content: string;
  votes: number;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.title = "";
    this.imageUrl = "";
    this.content = "";
    this.votes = 0;
  }

  addNews() {
    const id: number = Date.now();
    this.newsService.addNews(id, this.title, this.imageUrl, this.content, 0);
    this.title = "";
    this.imageUrl = "";
    this.content = "";
    this.votes = 0;
  }
}