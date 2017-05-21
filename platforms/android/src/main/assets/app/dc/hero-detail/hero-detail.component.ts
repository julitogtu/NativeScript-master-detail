import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HeroDetail } from "../models/heroDetail";
import { HeroService } from "../services/hero.service";

@Component({
    selector: "ns-herodetail",
    moduleId: module.id,
    templateUrl: "./hero-detail.component.html",
})
export class HeroDetailComponent implements OnInit {
    public hero: HeroDetail;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const heroId = this.route.snapshot.params["id"];
        this.hero = this.heroService.getHeroById(heroId);
        console.log("Hero is: " + this.hero.name);
    }
}