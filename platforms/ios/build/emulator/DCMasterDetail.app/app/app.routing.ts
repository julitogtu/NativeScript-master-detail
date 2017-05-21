import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { HeroesComponent } from "./dc/hero-master/hero-master.component";
import { HeroDetailComponent } from "./dc/hero-detail/hero-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/heroes", pathMatch: "full" },
    { path: "heroes", component: HeroesComponent },
    { path: "hero/:id", component: HeroDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }