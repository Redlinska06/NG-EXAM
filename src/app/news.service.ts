import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = this.initializeNews();

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  public addNews(
    id: number,
    title: string,
    imageUrl: string,
    content: string,
    votes: number
  ) {
    this.news.push(new NewsData(id, title, imageUrl, content, votes));
    this.onChange.emit();
  }

  public removeNews(id: number) {
    const index: number = this.findNewsIndexById(id);

    this.news.splice(index, 1);
    this.onChange.emit();
  }

  public refresh() {
    this.onChange.emit();
  }

  public voteUp(id: number) {
    const index: number = this.findNewsIndexById(id);
    this.news[index].votes++;
    this.onChange.emit();
  }

  public voteDown(id: number) {
    const index: number = this.findNewsIndexById(id);
    this.news[index].votes--;
    this.onChange.emit();
  }

  private findNewsIndexById(id: number): number {
    const index = this.news.findIndex(news => {
      return news.id === id;
    });

    return index;
  }

  initializeNews(): NewsData[] {
    this.onChange.emit();
    return this.news = [
      new NewsData(1, 'Dlaczego rezygnujemy z noworocznych postanowień?', 'http://zdrofitowo.pl/wp-content/uploads/2017/01/zdrofit_blog_800x525_170103.png', 'Od pierwszego stycznia zaczynasz nowe życie! No, może jednak od drugiego, po Sylwestrze trzeba przecież zregenerować siły, żeby jeszcze energiczniej wdrażać noworoczne postanowienia. A tych, jak co roku, jest bez liku: restrykcyjna dieta, regularne treningi, nadgonienie zaległych sezonów „Gry o tron”…', 0),
      new NewsData(2, '7 etapów budowy domu – jak to się odbywa krok po kroku?', 'https://www.sposobynazycie.pl/wp-content/uploads/2019/02/etapy_budowy_domu_sposobynazycie_1.jpg', 'Czasem się zastanawiam, czy nie porwaliśmy się z motyką na słońce! Zdecydowaliśmy się zbudować swój wymarzony dom. Miało być miło, szybko, prosto i przyjemnie. Ale niestety rzeczywistość okazała się inna. Dlaczego? Poznaj etapy budowania domu krok po kroku!', 0),
      new NewsData(3, 'Jak tanio podróżować?', 'https://wszedobylscy.com/wp-content/uploads/2015/07/taniepodrozowanie4.jpg', 'Każdy ma swoje sprawdzone sposoby na podróżowanie, które nie rujnują portfela. My zebraliśmy kilkanaście zasad, które umożliwiają nam wyjazdy za rozsądne pieniądze. Przez te kilkanaście lat podróżowania zebrała nam się całkiem pokaźna lista. Wiele z tych zasad dalej stosujemy, część z nich w naszym przypadku odeszła już do lamusa. Bo tak naprawdę fajnie jest zwiedzać i podróżować za niewielkie pieniądze, ale z czasem zaczynamy odczuwać potrzebę większego komfortu podczas wyjazdów, szczególnie jeśli podróżujemy z małym dzieckiem.', 0),
      new NewsData(4, 'Jak się uczę: Angular', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E7R4kUMhmda45SF98sEU0MuR7AHc38nmlgnkQoxCZ8jymDVAjg&s', 'Angular jest frameworkiem JavaScriptu, który pozwala na budować aplikacje webowe, desktopowe, mobilne, a także natywne. Nie będę się tutaj rozwodzić nad teorią, a odeślę Was po prostu na oficjalną stronę Angulara, która jest jednocześnie moim głównym źródłem wiedzy. Na sam początek polecam kierować się sugestiami właśnie z tej strony, znajdziecie je tutaj. Jak wskazują twórcy Angulara, najpierw warto zapoznać się z konfiguracją środowiska, potem przejść przez tutorial, a później do bardziej zaawansowanych kwestii. Mnie bardzo przydało się przejście przez tutorial aplikacji Tour of Heroes. Dzięki niemu poznałam podstawowe pojęcia związane z Angularem, a także mogłam pierwszym raz zobaczyć, jak wygląda TypeScript. W Angularze bowiem pisze się w TypScripcie, który jest swego rodzaju “nakładką” na JavaScript zawierającą typy oraz inne przydatne funkcje.', 0)
    ];
  }
}