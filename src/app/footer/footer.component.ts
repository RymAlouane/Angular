import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footer="Le footer de la page d'accueil"
  constructor() { }

  ngOnInit(): void {
  }

}
