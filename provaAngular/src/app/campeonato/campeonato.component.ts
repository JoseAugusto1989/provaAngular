import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Campeonato } from './campeonato';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.scss']
})
export class CampeonatoComponent implements OnInit {

  newCamp: Campeonato = {} as Campeonato;
  campList: Campeonato[] = [];

  saveData(myForm: NgForm) {
    this.campList.push(this.newCamp);
    this.campList.sort(this.sortData);
    this.newCamp = {} as Campeonato;
    myForm.resetForm();
  }

  sortData = (a: Campeonato, b: Campeonato) => b.pontuacao - a.pontuacao;

  constructor() { }

  ngOnInit(): void {
  }

}
