"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("../services/hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.heroes = this.heroService.getHeroesList();
        console.log(this.heroes);
        console.log(this.heroes.length);
        for (var i = 0; i < this.heroes.length; i++) {
            console.log(this.heroes[i].name);
        }
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: "ns-heroes",
        moduleId: module.id,
        templateUrl: "./hero-master.component.html",
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1tYXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby1tYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELHlEQUF1RDtBQU92RCxJQUFhLGVBQWU7SUFHeEIseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7cUNBSW1DLDBCQUFXO0dBSG5DLGVBQWUsQ0FhM0I7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9tb2RlbHMvaGVyb1wiO1xuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaGVyby5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWhlcm9lc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZXJvLW1hc3Rlci5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBoZXJvZXM6IEhlcm9bXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhlcm9lcyA9IHRoaXMuaGVyb1NlcnZpY2UuZ2V0SGVyb2VzTGlzdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlcm9lcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVyb2VzLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZXJvZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5oZXJvZXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19