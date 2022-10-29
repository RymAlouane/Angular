import { Component, OnInit } from '@angular/core';
import {todo} from "../model/todo";
import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 todoList!:todo[];
 c!:number;
  constructor(private calculService:CalculService) { }
calcul()
{this.c=this.calculService.getNumberOf
(this.todoList,"completed",false)}
  ngOnInit(): void {
    this.todoList=[
      {"userId": 1, "id": 1, "title": "liste1", "completed": false},
      {"userId": 1, "id": 2, "title": "liste2", "completed": false},
      {"userId": 1, "id": 3, "title": "liste3", "completed": true},
      {"userId": 1, "id": 4, "title": "liste4", "completed": true}];
  }

}
