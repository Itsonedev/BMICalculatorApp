import { Component } from '@angular/core';
import { BodyMassIndex } from '../../BodyMassIndex';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {

  statistics:BodyMassIndex = 
  {
    "id": 1,
    "feet": null,
    "inches": null,
    "pounds": null,
    "health": ""
  }


result: number = 0;

calculateBMI() {

  const heightInInches = this.statistics.feet! * 12 + this.statistics.inches!;
  const weight = this.statistics.pounds!;

  if(isNaN(heightInInches) || isNaN(weight)){
    this.result = 0;
  } else{
    this.result = (weight / ((heightInInches * heightInInches)) * 703);
    this.calculateHealth();
  }
  
}

calculateHealth(){

  if (this.result === 0) {
    this.statistics.health = "Health Category Invalid";
  } else if (this.result < 18.5) {
    this.statistics.health = "Underweight";
  } else if (this.result >= 18.5 && this.result <= 24.9) {
    this.statistics.health = "Healthy Weight";
  } else if (this.result >= 25 && this.result <= 29.9) {
    this.statistics.health = "Overweight";
  } else{
    this.statistics.health = "Obesity"
  }

}

refreshPage() {
  window.location.reload();
}







}
