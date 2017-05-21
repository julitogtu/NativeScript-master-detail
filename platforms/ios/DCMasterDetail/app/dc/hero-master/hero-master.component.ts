import { Component, OnInit } from "@angular/core";

import { Hero } from "../models/hero";
import { HeroService } from "../services/hero.service";

@Component({
    selector: "ns-heroes",
    moduleId: module.id,
    templateUrl: "./hero-master.component.html",
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroes = this.heroService.getHeroesList();
        console.log(this.heroes);
        console.log(this.heroes.length);
        for (let i = 0; i < this.heroes.length; i++){
            console.log(this.heroes[i].name);
        }
    }
}