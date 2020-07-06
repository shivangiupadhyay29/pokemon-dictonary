import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PokemonService } from '../service/pokemon/pokemon.service';
import { TypesColors,  TypesEffectMaping } from '../consants/index';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  summary: any = {};
  profile: any = {};
  evolution: any = {};
  damage : any = {};

constructor(private router: Router, private route: ActivatedRoute , private pokemonService: PokemonService) { }

  ngOnInit(): void {
      const id  = this.route.snapshot.paramMap.get('id');
      let details  = this.pokemonService.getPokemonDetails(+id);
      let species= this.pokemonService.getPokemonSpecies(+id);
      let evolutionary =  this.pokemonService.getPokemonEvolutionary(+id);
      Promise.all([details, species, evolutionary]).then(result =>{
          const { summary, profile, evolution, damage } = this.mapTheObjects(result);
          this.summary = summary;
          this.profile = profile;
          this.evolution = evolution;
          this.damage = damage;
        });
  }

  mapTheObjects(result) {
    const evolutionName = result[2].chain.evolves_to[0]?.species?.name.substring(0, 1).toUpperCase()
    + result[2].chain.evolves_to[0]?.species?.name.substring(1).toLowerCase();
    const evolutionLevel = result[2].chain.evolves_to[0]?.evolution_details[0]?.min_level;
    const evolutionId = +result[2].chain.evolves_to[0]?.species?.url.split('pokemon-species/')[1].replace('/','');

    let summary = {
      name: result[1].names[8].name,
      id: result[0].id,
      types: result[0].types.map(ele => ({ name: ele.type.name, color: TypesColors[ele.type.name.toUpperCase()] }) ),
      stats: result[0].stats.map(ele => ({
      name: ele.stat.name.substring(0, 1).toUpperCase() + ele.stat.name.substring(1).toLowerCase(),
      score: ele.base_stat })
      ),
      title: result[1].genera[7].genus,
      text: result[1].flavor_text_entries[20].flavor_text,
      image: `https://pokeres.bastionbot.org/images/pokemon/${result[0].id}.png`
    };

    let profile = {
        height: result[0].height / 10,
        weight: result[0].weight / 10,
        catchRatio: result[1].capture_rate,
        eggGroups: result[1].egg_groups.map(
          ele => ele.name?.substring(0, 1).toUpperCase() + ele.name?.substring(1).toLowerCase()
        ).join(','),
        abilities: result[0].abilities.map(
          ele => ele.ability.name?.substring(0, 1).toUpperCase() + ele.ability.name?.substring(1).toLowerCase()
        ).join(','),
        genderRatio: {women: (result[1].gender_rate * 10) + '%', men: (100 - result[1].gender_rate * 10) + '%'},
        hatchSteps: result[1].hatch_counter * 100,
        evs: result[0].stats.map(ele => ele.effort).filter(ele => ele !== 0) +  ' Sp ' + ' Att'
    }

    let evolution = {
        evolutionUrl: `https://pokeres.bastionbot.org/images/pokemon/${evolutionId}.png`,
        image: `https://pokeres.bastionbot.org/images/pokemon/${result[0].id}.png`,
        text: summary.name + " envolves into " + evolutionName + " at level "
        + evolutionLevel
    }

    const types = summary.types.map(ele =>  ele.name);

    let damage = [];

    types.map(ele => {
       damage.push(...TypesEffectMaping[ele.toUpperCase()]);
    });

    return {
      summary,
      profile,
      evolution,
      damage: new Set(damage)
    }
  }

  randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
