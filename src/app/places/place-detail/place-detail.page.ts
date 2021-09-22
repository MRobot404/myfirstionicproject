import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRouter: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap =>{
const recipeId =paramMap.get('placeId');
this.place =this.placesService.getPlace(recipeId);
console.log(this.place);
    });
  }

}
