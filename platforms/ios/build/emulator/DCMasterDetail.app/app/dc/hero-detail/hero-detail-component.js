"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("../services/hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService) {
        this.heroService = heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        alert("Pending...");
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-herodetail",
        moduleId: module.id,
        templateUrl: "./hero-detail.component.html",
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1kZXRhaWwtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby1kZXRhaWwtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELHlEQUF1RDtBQU92RCxJQUFhLG1CQUFtQjtJQUc1Qiw2QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRWpELHNDQUFRLEdBQVI7UUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7cUNBSW1DLDBCQUFXO0dBSG5DLG1CQUFtQixDQVEvQjtBQVJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSGVyb0RldGFpbH0gZnJvbSBcIi4uL21vZGVscy9oZXJvRGV0YWlsXCI7XG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9oZXJvLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaGVyb2RldGFpbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZXJvLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaGVybzogSGVyb0RldGFpbFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoZXJvU2VydmljZTogSGVyb1NlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGFsZXJ0KFwiUGVuZGluZy4uLlwiKTtcbiAgICB9XG59Il19