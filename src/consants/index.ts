export const navigation = (isAdmin) =>isAdmin ? [
  {label: 'Pokemon', path: '/' },
  {label: 'Home', path: '/home'},
  {label: 'Detail', path: '/detail' , id: null},
  {label: 'Create Product', path: '/create'},
  {label: 'Product list', path: '/create'}
]:[
  {label: 'Pokemon', path: '/' },
  {label: 'Home', path: '/home'},
  {label: 'Detail', path: '/detail'},
]

export const Labels = {
  AdminLoginLabel: "You are logged in as admin",
  AdminLoginButton: "Login As Admin",
  UserLoginLabel:"You are logged in as User",
  UserLoginButton: "Login As A User",
}


export enum TypesColors {
  FIRE = 'Maroon',
  GRASS = 'LimeGreen',
  ICE = 'Turquoise',
  POISON = 'Lavender',
  FLYING = 'MediumBlue',
  BUG = 'Coral',
  GHOST = 'Chocolate',
  DRAGON = 'DarkKhaki',
  FAIRY = 'RosyBrown',
  NORMAL = 'Olive ',
  WATER = 'Aqua',
  FIGHTING = 'LightSalmon',
  ELECTRIC = 'Gold',
  GROUND = 'DarkOrange',
  PSYCHIC = 'PaleVioletRed',
  ROCK = 'Gray',
  DARK = 'Silver',
  STEEL = 'LightSlateGray'
}



export const TypesEffectMaping = {
  FIRE: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice', 'Fairy',	'Ground', 'Rock', 'Water'],
  GRASS: ['Water', 'Grass', 'Electric',	'Flying', 'Poison', 'Bug', 'Fire', 'Ice'],
  ICE: ['Ice' ,	'Fighting', 'Rock', 'Steel', 'Fire'],
  POISON: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy',	'Ground', 'Psychic'],
  FLYING: ['Ground', 'Fighting', 'Bug', 'Grass', 	'Rock', 'Electric', 'Ice'],
  BUG: ['Fighting', 'Ground', 'Grass',	'Flying', 'Rock', 'Fire'],
  GHOST: ['Normal', 'Fighting', 'Poison', 'Bug',	'Ghost', 'Dark'],
  DRAGON: ['Fire', 'Water', 'Grass', 'Electric',	'Ice', 'Dragon', 'Fairy'],
  FAIRY: ['Fighting', 'Bug', 'Dark',	'Poison', 'Ghost', 'Dragon'],
  NORMAL: ['Ghost',	'Fighting'],
  WATER: ['Steel', 'Fire', 'Water', 'Ice',	'Grass', 'Electric'],
  FIGHTING: ['Rock', 'Bug', 'Dark',	'Flying', 'Psychic', 'Fairy'],
  ELECTRIC: ['Flying', 'Steel', 'Electric',	'Ground'],
  GROUND: ['Poison', 'Rock',	'Water', 'Grass', 'Ice'],
  PSYCHIC: ['Fighting', 'Psychic',	'Bug', 'Ghost', 'Dark'],
  ROCK: ['Poison', 'Rock', 'Water', 'Grass', 'Ice'],
  DARK:  ['Ghost', 'Psychic', 'Dark',	'Fighting', 'Bug', 'Fairy'],
  STEEL: ['Normal', 'Flying', 'Poison', 'Rock', 'Bug', 'Steel', 'Grass', 'Psychic', 'Ice', 'Dragon', 'Fairy',	'Fighting', 'Fire', 'Poison']
};


