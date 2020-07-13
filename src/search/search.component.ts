import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../service/pokemon/pokemon.service';
import { SearchService } from '../service/search/search.service';
import {  FormGroup, FormControl, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchField: FormControl;
  searches: string[] = [];

  constructor( private searchService: SearchService) { }


  ngOnInit() {
    this.searchField = new FormControl('', [Validators.minLength(3), Validators.pattern('^[A-Za-z]+$')]);
  }

  onKey($event) {
    this.searchField.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(term => {
      this.searchService.search(term);
    });
    // this.searchService.search(this.searches);
  }

}
