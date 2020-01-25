import { Pipe, PipeTransform } from "@angular/core";
import { NewsData } from "./news-data";

@Pipe({ name: "sortByVotes" })
export class SortByVotesPipe implements PipeTransform {
    transform(newsList: NewsData[]): NewsData[] {
        return newsList.sort((a: NewsData, b: NewsData) => {
            return b.votes - a.votes;
        });
    }
}