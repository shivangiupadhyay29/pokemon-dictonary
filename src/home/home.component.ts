import { Component, OnInit,  OnDestroy  } from '@angular/core';
import { IPokemon } from './pokemon-list.interface';
import { PokemonService } from '../service/pokemon/pokemon.service';
import { SearchService } from '../service/search/search.service';
import { Subscription } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy  {
  pokemonList: IPokemon[] = [];
  previous = this.pokemonService.previous;
  next = this.pokemonService.next;
  searchKeyword = '' ;
  detail;
  species;
  evolutionary;

 subscription: Subscription = this.searchService.searchKeywordSource.subscribe(
    keyword => {
      this.searchKeyword = keyword;
  });

  constructor(private pokemonService: PokemonService, private searchService: SearchService, private router: Router) {
       this.subscription = searchService.searchKeywordSource.subscribe(
        keyword => {
          this.searchKeyword = keyword;
      });
   }

   ngOnChanges() {
   }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe( (data: IPokemon) => {
      this.previous = this.pokemonService.previous;
      this.next = this.pokemonService.next;
      // tslint:disable-next-line: max-line-length
      if ((this.searchKeyword.length > 0 && this.searchKeyword.toLowerCase() === data.name.toLowerCase()) || this.searchKeyword.length === 0) {
         this.pokemonList.push(data);
      }
    });
  }

  getPrevious(url: string | null): void {
    this.pokemonList = [];
    this.pokemonService.getPokemonList(url).subscribe( (data: IPokemon) => {
      this.previous = this.pokemonService.previous;
      this.next = this.pokemonService.next;
     // tslint:disable-next-line: max-line-length
      if ((this.searchKeyword.length > 0 && this.searchKeyword.toLowerCase() === data.name.toLowerCase()) || this.searchKeyword.length === 0) {
      this.pokemonList.push(data);
   }
    });
  }

  getNext(url: string | null): void {
    this.pokemonList = [];
    this.pokemonService.getPokemonList(url).subscribe( (data: IPokemon) => {
      this.previous = this.pokemonService.previous;
      this.next = this.pokemonService.next;
      // tslint:disable-next-line: max-line-length
      if ((this.searchKeyword.length > 0 && this.searchKeyword.toLowerCase() === data.name.toLowerCase()) || this.searchKeyword.length === 0) {
        this.pokemonList.push(data);
     }
    });
  }


  getPokemonDetails(id: number) {
    this.pokemonService.setPokemonId(id);
    this.router.navigate([`detail`, id]);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }


}
