export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: Date;
}

export interface Location {
  name: string;
  url: string;
}

export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface RawUser {
  name: string;
  email: string;
  password: string;
}

export interface LogUser {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  favoritesId: string[];
}

export interface Favorite {
  id: string;
  character: Pick<Character, 'id' | 'name' | 'image'>;
}

export interface RawFavorite {
  character: Pick<Character, 'id' | 'name' | 'image'>;
}
