import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] =[
    {
      id:'1',
      title:'Lago de Atitlán',
      imageURL: 'https://p4.wallpaperbetter.com/wallpaper/18/966/511/lake-atitlan-solola-guatemala-wallpaper-preview.jpg',
      comments: ['Lugar asombroso','Experiencia maravillosa']
    },
    {
      id:'2',
      title:'Antigua Guatemala',
      imageURL: 'https://www.guatevalley.com/photo/photo_a1/1309/ptNHhvwq4BjV56mFb7rp.jpg',
      comments: ['Lugar asombroso', 'Experiencia maravillosa']
    },
    {
      id:'3',
      title:'Tikal Peten',
      imageURL: 'https://wallpapercave.com/wp/wp2546251.jpg',
      comments: []
    }
  ];

  constructor() { }

  getPlaces(){
    return[...this.places];
  }

  getPlace(placeId: string){
   return {
    ...this.places.find(place => place.id===placeId)
   };
  }

  addPlaces(title: string, imageURL: string){
    this.places.push(
      {
title,
imageURL,
comments: [],
id:this.places.length+1+ ''

      }
    );
  }

 deletePlace(placeId: string){
  this.places = this.places.filter(place =>place.id !== placeId);
 }
}
