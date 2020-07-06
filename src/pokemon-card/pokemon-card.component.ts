import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IPokemon } from 'src/home/pokemon-list.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input('pokemon') pokemonItem: IPokemon;
  @Output()getPokemonDetails: EventEmitter<any> =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  goToDetail(id: number): void {
    this.getPokemonDetails.emit(id);
  }

}
