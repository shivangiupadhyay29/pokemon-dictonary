import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

    // Observable string sources
    public searchKeywordSource = new BehaviorSubject('');
    searchKeyword$ = this.searchKeywordSource.asObservable();

      // Service message commands
      search(keyword: string) {
        this.searchKeywordSource.next(keyword);
      }

      resetSearch() {
        this.searchKeywordSource.next('');
      }
}
