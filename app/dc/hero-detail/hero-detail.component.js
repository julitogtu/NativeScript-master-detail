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
        console.log("Hero is: " + this.hero.name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCx5REFBdUQ7QUFPdkQsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQW9CLFdBQXdCLEVBQVUsS0FBcUI7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFFaEYsc0NBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7cUNBSW1DLDBCQUFXLEVBQWlCLHVCQUFjO0dBSGxFLG1CQUFtQixDQVUvQjtBQVZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIZXJvRGV0YWlsIH0gZnJvbSBcIi4uL21vZGVscy9oZXJvRGV0YWlsXCI7XG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9oZXJvLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaGVyb2RldGFpbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZXJvLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaGVybzogSGVyb0RldGFpbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGVyb0lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgdGhpcy5oZXJvID0gdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvQnlJZChoZXJvSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhlcm8gaXM6IFwiICsgdGhpcy5oZXJvLm5hbWUpO1xuICAgIH1cbn0iXX0=