import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRouter: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('placeId');
      this.place = this.placesService.getPlace(recipeId);
    });
  }

 async deletePlace() {
const alertElement =   await this.alertCtrl.create({
      header: 'Estas seguro de eliminar este elemento?',
      message: 'Ten cuidado',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          },
        },
      ],
    });
  await  alertElement.present();

  }
}
