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
                "image": "~/dc/images/superman.png"
            },
            {
                "id": 2,
                "name": "Batman",
                "gender": "male",
                "description": "Crash! Vroom! Meow! Whenever Catwoman gets up to her latest purr-fect plan, Batman answers the crime-fighting call.",
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
            }
        ];
    }
    HeroService.prototype.getHeroesList = function () {
        return this.heroes;
    };
    HeroService.prototype.getHeroeById = function (id) {
        return this.heroes.filter(function (c) { return c.id === id; }).pop();
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsV0FBVztJQUR4QjtRQUVZLFdBQU0sR0FBa0I7WUFDNUI7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixhQUFhLEVBQUUsbUtBQW1LO2dCQUNsTCxPQUFPLEVBQUUsMEJBQTBCO2FBQ3RDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixhQUFhLEVBQUUscUhBQXFIO2dCQUNwSSxPQUFPLEVBQUUsd0JBQXdCO2FBQ3BDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLGFBQWEsRUFBRSw2SUFBNkk7Z0JBQzVKLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsT0FBTztnQkFDZixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLDhJQUE4STtnQkFDN0osT0FBTyxFQUFFLHVCQUF1QjthQUNuQztZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLDRKQUE0SjtnQkFDM0ssT0FBTyxFQUFFLDhCQUE4QjthQUMxQztZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLDhIQUE4SDtnQkFDN0ksT0FBTyxFQUFFLDZCQUE2QjthQUN6QztTQUNKLENBQUM7SUFTTixDQUFDO0lBUFUsbUNBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sa0NBQVksR0FBbkIsVUFBb0IsRUFBVTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBckRELElBcURDO0FBckRZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtHQUNBLFdBQVcsQ0FxRHZCO0FBckRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4uL21vZGVscy9oZXJvXCI7XG5pbXBvcnQgeyBIZXJvRGV0YWlsIH0gZnJvbSBcIi4uL21vZGVscy9oZXJvRGV0YWlsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZXJvU2VydmljZSB7XG4gICAgcHJpdmF0ZSBoZXJvZXMgOiBIZXJvRGV0YWlsW10gPSBbXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDEsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3VwZXJtYW5cIiwgXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2VudCB0byBFYXJ0aCBmcm9tIHRoZSBkeWluZyBwbGFuZXQgb2YgS3J5cHRvbiBhcyBhIGJhYnksIEthbC1FbCB3YXMgZm91bmQgYnkgZmFybWVycywgTWFydGhhIGFuZCBKb25hdGhhbiBLZW50LiBBZG9wdGluZyBoaW0gYXMgdGhlaXIgc29uLCB0aGV5IG5hbWVkIGhpbSBDbGFyay5cIiwgXG4gICAgICAgICAgICBcImltYWdlXCI6IFwifi9kYy9pbWFnZXMvc3VwZXJtYW4ucG5nXCIgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDIsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmF0bWFuXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNyYXNoISBWcm9vbSEgTWVvdyEgV2hlbmV2ZXIgQ2F0d29tYW4gZ2V0cyB1cCB0byBoZXIgbGF0ZXN0IHB1cnItZmVjdCBwbGFuLCBCYXRtYW4gYW5zd2VycyB0aGUgY3JpbWUtZmlnaHRpbmcgY2FsbC5cIiwgXG4gICAgICAgICAgICBcImltYWdlXCI6IFwifi9kYy9pbWFnZXMvYmF0bWFuLnBuZ1wiIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiAzLCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkZsYXNoXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5vdGhpbmcgb3V0cnVucyBUaGUgRmxhc2ggaW4gaGlzIGxpZ2h0bmluZy1mYXN0IE1pZ2h0eSBNaWNyb3MgcmFjZXIsIGVzcGVjaWFsbHkgd2hlbiBoZeKAmXMgY2hhcmdlZCB1cCB3aXRoIGhpcyBmYXZvcml0ZSBzdXBlciBwb3dlcmVkIGRyaW5rLlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9mbGFzaC5wbmdcIiBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwiaWRcIjogNCwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJSb2JpblwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJZb3UgbWF5IHRoaW5rIHRoYXQgUm9iaW4gZG9lc27igJl0IHN0YW5kIGEgY2hhbmNlIGluIGEgcmFjZSBhZ2FpbnN0IG9uZSBvZiBCYXRtYW7igJlzIG1vc3QgZGFuZ2Vyb3VzIGZvZXMsIGJ1dCB0aGUgQm95IFdvbmRlciBtYXkgc3VycHJpc2UgeW91ISBcIiwgXG4gICAgICAgICAgICBcImltYWdlXCI6IFwifi9kYy9pbWFnZXMvcm9iaW4ucG5nXCIgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDUsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR3JlZW4gTGFudGVyblwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEdWUgdG8gaGlzIGFiaWxpdHkgdG8gb3ZlcmNvbWUgZmVhciwgdGVzdCBwaWxvdCBIYWwgSm9yZGFuIHdhcyB0aGUgZmlyc3QgaHVtYW4gcmVjcnVpdGVkIHRvIHRoZSBpbnRlcmdhbGFjdGljIHBvbGljZSBmb3JjZSBjYWxsZWQgdGhlIEdyZWVuIExhbnRlcm4gQ29ycHMuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL2dyZWVubGFudGVybi5wbmdcIiBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwiaWRcIjogNiwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJXb25kZXIgV29tYW5cIiwgXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCb3JuIG9uIFBhcmFkaXNlIElzbGFuZCB0byBRdWVlbiBIaXBwb2x5dGEgb2YgdGhlIGltbW9ydGFsIEFtYXpvbnMsIHNoZSBpcyBrbm93biB0byBoZXIgQW1hem9uaWFuIHNpc3RlcnMgYXMgUHJpbmNlc3MgRGlhbmEuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL3dvbmRlcndvbWFuLnBuZ1wiIFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHB1YmxpYyBnZXRIZXJvZXNMaXN0KCkgOiBIZXJvW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZXJvZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhlcm9lQnlJZChpZDogbnVtYmVyKTogSGVyb0RldGFpbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlcm9lcy5maWx0ZXIoYyA9PiBjLmlkID09PSBpZCkucG9wKCk7XG4gICAgfVxufSJdfQ==