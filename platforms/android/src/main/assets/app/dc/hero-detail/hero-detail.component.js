"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("../services/hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var heroId = this.route.snapshot.params["id"];
        this.hero = this.heroService.getHeroById(heroId);
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-herodetail",
        moduleId: module.id,
        templateUrl: "./hero-detail.component.html",
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.ActivatedRoute])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCx5REFBdUQ7QUFPdkQsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQW9CLFdBQXdCLEVBQVUsS0FBcUI7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFFaEYsc0NBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtLQUM5QyxDQUFDO3FDQUltQywwQkFBVyxFQUFpQix1QkFBYztHQUhsRSxtQkFBbUIsQ0FTL0I7QUFUWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSGVyb0RldGFpbCB9IGZyb20gXCIuLi9tb2RlbHMvaGVyb0RldGFpbFwiO1xuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaGVyby5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWhlcm9kZXRhaWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaGVyby1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGhlcm86IEhlcm9EZXRhaWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhlcm9JZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuaGVybyA9IHRoaXMuaGVyb1NlcnZpY2UuZ2V0SGVyb0J5SWQoaGVyb0lkKTtcbiAgICB9XG59Il19