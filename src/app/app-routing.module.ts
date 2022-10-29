import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ListProductComponent } from './list-product/list-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import {DetailsComponent} from "./details/details.component";
import {TodolistComponent} from "./todolist/todolist.component";
const routes: Routes = [
  {path:'Accueil', component: ListProductComponent},
  {path:'TODO', component: TodolistComponent},
  {path:'Ajout', component: FormComponent},
  {path:'Accueil/:id', component: DetailsComponent},
  {path:'', redirectTo:'/Accueil', pathMatch:'full' },
  {path:'**', component:NotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
