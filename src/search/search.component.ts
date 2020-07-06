import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../service/pokemon/pokemon.service';
import { SearchService } from '../service/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  constructor( private searchService: SearchService) { }

  ngOnInit() {
  }

  onKey($event) {
    this.searchService.search($event.target.value);
  }

}
