import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  point = '';

  myEvent(e) {
    this.selectIa.life -= 10;
    if (this.selectIa.life <= 0) {
      alert("You lost ... Try again !!");
      location.reload();
    }
  }

  mySecondEvent(e) {
    this.selectPlayer.life -= 10;
    if (this.selectPlayer.life <= 0) {
      alert("You lost ... Try again !!");
      location.reload();
    }
  }

  myThreeEvent(e) {
    this.selectIa.life -= 20;
    if (this.selectIa.life <= 0) {
      alert("You lost ... Try again !!");
      location.reload();
    }
  }

  myFourEvent(e) {
    this.selectPlayer.life -= 20;
    if (this.selectPlayer.life <= 0) {
      alert("You lost ... Try again !!");
      location.reload();
    }
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

    this.selectIa.life = 100;
    console.log(this.selectIa);
  }

  constructor(private http: HttpClient) {
  }

  getPerso(param) {
    this.selectPlayer = this.heroes[param];
    this.selectPlayer.life = 100;

    console.log(this.selectPlayer);
    this.getIa();
  }

  ngOnInit(): void {
    this.http.get('https://akabab.github.io/superhero-api/api/all.json').subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
}
