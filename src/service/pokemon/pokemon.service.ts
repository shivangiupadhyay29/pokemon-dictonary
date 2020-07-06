import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   next: any;
   previous: any;
   pokemons: object[] = [];
   limit: number = 20;
   offset: number = 0;
   id:number | null;

  constructor(private http: HttpClient ) { }

  getPokemonDetails(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return this.http.get(url).pipe(
      map((data: any) => data),
    ).toPromise();
  }

  getPokemonSpecies(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    return this.http.get(url).pipe(
      map((data: any) => data),
    ).toPromise();
  }

  getPokemonEvolutionary(id: number) {
    const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
    return this.http.get(url).pipe(
      map((data: any) => data),
    ).toPromise();
  }

  setPokemonId(id) {
      this.id = id;
  }

  getPokemonList(url = 'https://pokeapi.co/api/v2/pokemon/?limit=limit&offset=offset' ) {
    this.id = null;
    return this.http.get(url).pipe(
       map((data: any) => {
         this.next = data.next;
         this.previous = data.previous;
         return data.results;
      }),
       mergeMap(( item: any ) => {
        return item.map( pokemon => {
          const id = +pokemon.url.split('pokemon/')[1].replace('/', '' );
          // this.id = id;
          const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
            return {
              name: pokemon.name,
              url: imageUrl,
              id
            };
      });
  }));
 }


}
