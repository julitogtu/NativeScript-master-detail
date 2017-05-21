"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeroService = (function () {
    function HeroService() {
        this.heroes = [
            {
                "id": 1,
                "name": "Superman",
                "gender": "male",
                "description": "Sent to Earth from the dying planet of Krypton as a baby, Kal-El was found by farmers, Martha and Jonathan Kent. Adopting him as their son, they named him Clark.",
                "image": "~/dc/images/superman.png",
                "imageDetail": "~/dc/images/superman-detail.jpg"
            },
            {
                "id": 2,
                "name": "Batman",
                "gender": "male",
                "description": "As the handsome billionaire Bruce Wayne by day and a vigilant super hero by night, Batman watches the night sky for Commissioner Gordon to light the Bat-Signal.",
                "image": "~/dc/images/batman.png"
            },
            {
                "id": 3,
                "name": "Flash",
                "gender": "male",
                "description": "Nothing outruns The Flash in his lightning-fast Mighty Micros racer, especially when he’s charged up with his favorite super powered drink.",
                "image": "~/dc/images/flash.png"
            },
            {
                "id": 4,
                "name": "Robin",
                "gender": "male",
                "description": "You may think that Robin doesn’t stand a chance in a race against one of Batman’s most dangerous foes, but the Boy Wonder may surprise you! ",
                "image": "~/dc/images/robin.png"
            },
            {
                "id": 5,
                "name": "Green Lantern",
                "gender": "male",
                "description": "Due to his ability to overcome fear, test pilot Hal Jordan was the first human recruited to the intergalactic police force called the Green Lantern Corps.",
                "image": "~/dc/images/greenlantern.png"
            },
            {
                "id": 6,
                "name": "Wonder Woman",
                "gender": "female",
                "description": "Born on Paradise Island to Queen Hippolyta of the immortal Amazons, she is known to her Amazonian sisters as Princess Diana.",
                "image": "~/dc/images/wonderwoman.png"
            },
            {
                "id": 7,
                "name": "Beast Boy",
                "gender": "male",
                "description": "When he was a young boy, Gar Logan became sick with a rare disease. The untested cure for his illness not only saved his life, it also changed his skin to green and gave him the power to transform into any animal imaginable.",
                "image": "~/dc/images/beastboy.png"
            },
            {
                "id": 8,
                "name": "Starfire",
                "gender": "female",
                "description": "An alien princess from the planet Tamaran, Starfire can fly and shoot energy bolts from her hands. Despite her powers and warrior training, Starfire's planet was conguered and she was enslaved at a very young age.",
                "image": "~/dc/images/starfire.png"
            },
            {
                "id": 9,
                "name": "Katana",
                "gender": "female",
                "description": "Trained to be a samurai warrior and martial arts expert, Tatsu Yamashiro wears a white mask to conceal her identity as the heroic vigilante Katana.",
                "image": "~/dc/images/katana.png"
            },
            {
                "id": 10,
                "name": "Blue Beetle",
                "gender": "male",
                "description": "After bonding with an alien scarab, teenager Jaime Reyes was transformed into Blue Beetle, a rookie super hero with lots to learn about battling super villains and saving the day.",
                "image": "~/dc/images/bluebeetle.png"
            }
        ];
    }
    HeroService.prototype.getHeroesList = function () {
        return this.heroes;
    };
    HeroService.prototype.getHeroById = function (id) {
        var hero = this.heroes.filter(function (c) { return c.id == id; }).pop();
        return hero;
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsV0FBVztJQUR4QjtRQUVZLFdBQU0sR0FBa0I7WUFDNUI7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixhQUFhLEVBQUUsbUtBQW1LO2dCQUNsTCxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxhQUFhLEVBQUUsaUNBQWlDO2FBQ25EO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixhQUFhLEVBQUUsa0tBQWtLO2dCQUNqTCxPQUFPLEVBQUUsd0JBQXdCO2FBQ3BDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLGFBQWEsRUFBRSw2SUFBNkk7Z0JBQzVKLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsT0FBTztnQkFDZixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLDhJQUE4STtnQkFDN0osT0FBTyxFQUFFLHVCQUF1QjthQUNuQztZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLDRKQUE0SjtnQkFDM0ssT0FBTyxFQUFFLDhCQUE4QjthQUMxQztZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLDhIQUE4SDtnQkFDN0ksT0FBTyxFQUFFLDZCQUE2QjthQUN6QztZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLGtPQUFrTztnQkFDalAsT0FBTyxFQUFFLDBCQUEwQjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLHVOQUF1TjtnQkFDdE8sT0FBTyxFQUFFLDBCQUEwQjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLHFKQUFxSjtnQkFDcEssT0FBTyxFQUFFLHdCQUF3QjthQUNwQztZQUNEO2dCQUNJLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxhQUFhO2dCQUNyQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLHFMQUFxTDtnQkFDcE0sT0FBTyxFQUFFLDRCQUE0QjthQUN4QztTQUNKLENBQUM7SUFVTixDQUFDO0lBUlUsbUNBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsRUFBVTtRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQW5GRCxJQW1GQztBQW5GWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBbUZ2QjtBQW5GWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9tb2RlbHMvaGVyb1wiO1xuaW1wb3J0IHsgSGVyb0RldGFpbCB9IGZyb20gXCIuLi9tb2RlbHMvaGVyb0RldGFpbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVyb1NlcnZpY2Uge1xuICAgIHByaXZhdGUgaGVyb2VzIDogSGVyb0RldGFpbFtdID0gW1xuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiAxLCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlN1cGVybWFuXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlbnQgdG8gRWFydGggZnJvbSB0aGUgZHlpbmcgcGxhbmV0IG9mIEtyeXB0b24gYXMgYSBiYWJ5LCBLYWwtRWwgd2FzIGZvdW5kIGJ5IGZhcm1lcnMsIE1hcnRoYSBhbmQgSm9uYXRoYW4gS2VudC4gQWRvcHRpbmcgaGltIGFzIHRoZWlyIHNvbiwgdGhleSBuYW1lZCBoaW0gQ2xhcmsuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL3N1cGVybWFuLnBuZ1wiLFxuICAgICAgICAgICAgXCJpbWFnZURldGFpbFwiOiBcIn4vZGMvaW1hZ2VzL3N1cGVybWFuLWRldGFpbC5qcGdcIiBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwiaWRcIjogMiwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCYXRtYW5cIiwgXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQXMgdGhlIGhhbmRzb21lIGJpbGxpb25haXJlIEJydWNlIFdheW5lIGJ5IGRheSBhbmQgYSB2aWdpbGFudCBzdXBlciBoZXJvIGJ5IG5pZ2h0LCBCYXRtYW4gd2F0Y2hlcyB0aGUgbmlnaHQgc2t5IGZvciBDb21taXNzaW9uZXIgR29yZG9uIHRvIGxpZ2h0IHRoZSBCYXQtU2lnbmFsLlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9iYXRtYW4ucG5nXCIgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDMsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmxhc2hcIiwgXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTm90aGluZyBvdXRydW5zIFRoZSBGbGFzaCBpbiBoaXMgbGlnaHRuaW5nLWZhc3QgTWlnaHR5IE1pY3JvcyByYWNlciwgZXNwZWNpYWxseSB3aGVuIGhl4oCZcyBjaGFyZ2VkIHVwIHdpdGggaGlzIGZhdm9yaXRlIHN1cGVyIHBvd2VyZWQgZHJpbmsuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL2ZsYXNoLnBuZ1wiIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiA0LCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvYmluXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIllvdSBtYXkgdGhpbmsgdGhhdCBSb2JpbiBkb2VzbuKAmXQgc3RhbmQgYSBjaGFuY2UgaW4gYSByYWNlIGFnYWluc3Qgb25lIG9mIEJhdG1hbuKAmXMgbW9zdCBkYW5nZXJvdXMgZm9lcywgYnV0IHRoZSBCb3kgV29uZGVyIG1heSBzdXJwcmlzZSB5b3UhIFwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9yb2Jpbi5wbmdcIiBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwiaWRcIjogNSwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHcmVlbiBMYW50ZXJuXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkR1ZSB0byBoaXMgYWJpbGl0eSB0byBvdmVyY29tZSBmZWFyLCB0ZXN0IHBpbG90IEhhbCBKb3JkYW4gd2FzIHRoZSBmaXJzdCBodW1hbiByZWNydWl0ZWQgdG8gdGhlIGludGVyZ2FsYWN0aWMgcG9saWNlIGZvcmNlIGNhbGxlZCB0aGUgR3JlZW4gTGFudGVybiBDb3Jwcy5cIiwgXG4gICAgICAgICAgICBcImltYWdlXCI6IFwifi9kYy9pbWFnZXMvZ3JlZW5sYW50ZXJuLnBuZ1wiIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiA2LCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldvbmRlciBXb21hblwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJvcm4gb24gUGFyYWRpc2UgSXNsYW5kIHRvIFF1ZWVuIEhpcHBvbHl0YSBvZiB0aGUgaW1tb3J0YWwgQW1hem9ucywgc2hlIGlzIGtub3duIHRvIGhlciBBbWF6b25pYW4gc2lzdGVycyBhcyBQcmluY2VzcyBEaWFuYS5cIiwgXG4gICAgICAgICAgICBcImltYWdlXCI6IFwifi9kYy9pbWFnZXMvd29uZGVyd29tYW4ucG5nXCIgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDcsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVhc3QgQm95XCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldoZW4gaGUgd2FzIGEgeW91bmcgYm95LCBHYXIgTG9nYW4gYmVjYW1lIHNpY2sgd2l0aCBhIHJhcmUgZGlzZWFzZS4gVGhlIHVudGVzdGVkIGN1cmUgZm9yIGhpcyBpbGxuZXNzIG5vdCBvbmx5IHNhdmVkIGhpcyBsaWZlLCBpdCBhbHNvIGNoYW5nZWQgaGlzIHNraW4gdG8gZ3JlZW4gYW5kIGdhdmUgaGltIHRoZSBwb3dlciB0byB0cmFuc2Zvcm0gaW50byBhbnkgYW5pbWFsIGltYWdpbmFibGUuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL2JlYXN0Ym95LnBuZ1wiIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiA4LCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlN0YXJmaXJlXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gYWxpZW4gcHJpbmNlc3MgZnJvbSB0aGUgcGxhbmV0IFRhbWFyYW4sIFN0YXJmaXJlIGNhbiBmbHkgYW5kIHNob290IGVuZXJneSBib2x0cyBmcm9tIGhlciBoYW5kcy4gRGVzcGl0ZSBoZXIgcG93ZXJzIGFuZCB3YXJyaW9yIHRyYWluaW5nLCBTdGFyZmlyZSdzIHBsYW5ldCB3YXMgY29uZ3VlcmVkIGFuZCBzaGUgd2FzIGVuc2xhdmVkIGF0IGEgdmVyeSB5b3VuZyBhZ2UuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL3N0YXJmaXJlLnBuZ1wiIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiA5LCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkthdGFuYVwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRyYWluZWQgdG8gYmUgYSBzYW11cmFpIHdhcnJpb3IgYW5kIG1hcnRpYWwgYXJ0cyBleHBlcnQsIFRhdHN1IFlhbWFzaGlybyB3ZWFycyBhIHdoaXRlIG1hc2sgdG8gY29uY2VhbCBoZXIgaWRlbnRpdHkgYXMgdGhlIGhlcm9pYyB2aWdpbGFudGUgS2F0YW5hLlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9rYXRhbmEucG5nXCIgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDEwLCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsdWUgQmVldGxlXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFmdGVyIGJvbmRpbmcgd2l0aCBhbiBhbGllbiBzY2FyYWIsIHRlZW5hZ2VyIEphaW1lIFJleWVzIHdhcyB0cmFuc2Zvcm1lZCBpbnRvIEJsdWUgQmVldGxlLCBhIHJvb2tpZSBzdXBlciBoZXJvIHdpdGggbG90cyB0byBsZWFybiBhYm91dCBiYXR0bGluZyBzdXBlciB2aWxsYWlucyBhbmQgc2F2aW5nIHRoZSBkYXkuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL2JsdWViZWV0bGUucG5nXCIgXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgcHVibGljIGdldEhlcm9lc0xpc3QoKSA6IEhlcm9bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlcm9lcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SGVyb0J5SWQoaWQ6IG51bWJlcik6IEhlcm9EZXRhaWwge1xuICAgICAgICB2YXIgaGVybyA9IHRoaXMuaGVyb2VzLmZpbHRlcihjID0+IGMuaWQgPT0gaWQpLnBvcCgpO1xuICAgICAgICByZXR1cm4gaGVybztcbiAgICB9XG59Il19