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
    }
}