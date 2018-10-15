import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scoreA: number;
  scoreB: number;

  constructor(public navCtrl: NavController) {
    this.scoreA = 0;
    this.scoreB = 0;
  }

  teamAThreePoints(){
    this.scoreA +=3;
  }

  teamATwoPoints(){
    this.scoreA +=2;
  }

  teamAFreePoint(){
    this.scoreA +=1;
  }

  teamBThreePoints(){
    this.scoreB +=3;
  }

  teamBTwoPoints(){
    this.scoreB +=2;
  }

  teamBFreePoint(){
    this.scoreB +=1;
  }

  reset(){
    this.scoreA =0;
    this.scoreB = 0;
  }


}
