import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { IPlanet } from '../star-wars.interface'
import { PlanetsService } from '../planets.service'




@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})




export class PlanetListComponent implements OnInit, OnDestroy {
  planetCard: string = 'Planets';
  imageWidth: number = 200;
  imageMargin: number = 2;
  errorMessage: string = '';
  sub!: Subscription;
 
  hiddenItems: any = {}
  planets: IPlanet[] = [
  ];



  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.sub = this.planetsService.getPlanets().subscribe({
      next: planets => {
        console.log("list", planets.results)

        this.planets = planets.results;

      },
      error: err => this.errorMessage = err
    });
  
  }




  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

