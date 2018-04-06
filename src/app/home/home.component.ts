import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  results = '';
  heroes
  selectPlayer = null;
  selectIa = null;
  healthPlayer = 100;
  healthIa = 100;
  point ='';
  
  getPerso(param) {
  this.selectPlayer = this.heroes[param];
  console.log(this.selectPlayer);
  this.getIa();
  }
  getIa() {
  const choice = Math.floor(Math.random() * 10);
  switch (choice) {
  case 0:
  this.selectIa = this.heroes[560];
  break;
  case 1:
  this.selectIa = this.heroes[550];
  break;
  case 2:
  this.selectIa = this.heroes[540];
  break;
  case 3:
  this.selectIa = this.heroes[530];
  break;
  case 4:
  this.selectIa = this.heroes[520];
  break;
  case 5:
  this.selectIa = this.heroes[510];
  break;
  case 6:
  this.selectIa = this.heroes[500];
  break;
  case 7:
  this.selectIa = this.heroes[490];
  break;
  case 8:
  this.selectIa = this.heroes[480];
  break;
  case 9:
  this.selectIa = this.heroes[470];
  break;
  }
  console.log(this.selectIa);
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.point = '75%';
    this.http.get('https://akabab.github.io/superhero-api/api/all.json').subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
}
function degat() {

}