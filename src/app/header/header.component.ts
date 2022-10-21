import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = "Le menu de la page d'accueil";
  property:boolean=false;
  message:string='';
  property1:string='Bonjour';
  methodA()
  {
  this.message="C'est le EB!"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
