export interface SearchResultItem {
    id: number;
    url: string;
    title: string;
    description: string;
    image: string;
    type: AnimalType;
  }
  
  export enum AnimalType {
    Insect = 'insect',
    Fish = 'fish',
    Horse = 'horse',
    Crocodilia = 'crocodilia',
    Bear = 'bear',
    Cetacean = 'cetacean',
    Cow = 'cow',
    Lion = 'lion',
    Rabbit = 'rabbit',
    Cat = 'cat',
    Snake = 'snake',
    Dog = 'dog',
    Bird = 'bird',
  }