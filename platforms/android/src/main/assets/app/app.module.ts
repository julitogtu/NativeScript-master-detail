import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { HeroService } from "./dc/services/hero.service";
import { HeroesComponent } from "./dc/hero-master/hero-master.component";
import { HeroDetailComponent } from "./dc/hero-detail/hero-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
