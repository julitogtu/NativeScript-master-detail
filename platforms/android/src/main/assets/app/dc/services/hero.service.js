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
                "realName": "Kal-El, Clark Joseph Kent",
                "city": "Metropolis"
            },
            {
                "id": 2,
                "name": "Batman",
                "gender": "male",
                "description": "As the handsome billionaire Bruce Wayne by day and a vigilant super hero by night, Batman watches the night sky for Commissioner Gordon to light the Bat-Signal.",
                "image": "~/dc/images/batman.png",
                "realName": "Bruce Wayne",
                "city": "Gotica"
            },
            {
                "id": 3,
                "name": "Flash",
                "gender": "male",
                "description": "Nothing outruns The Flash in his lightning-fast Mighty Micros racer, especially when he’s charged up with his favorite super powered drink.",
                "image": "~/dc/images/flash.png",
                "realName": "Barry Allen",
                "city": "Central City"
            },
            {
                "id": 4,
                "name": "Robin",
                "gender": "male",
                "description": "You may think that Robin doesn’t stand a chance in a race against one of Batman’s most dangerous foes, but the Boy Wonder may surprise you! ",
                "image": "~/dc/images/robin.png",
                "realName": "Richard Grayson",
                "city": "Gotica"
            },
            {
                "id": 5,
                "name": "Green Lantern",
                "gender": "male",
                "description": "Due to his ability to overcome fear, test pilot Hal Jordan was the first human recruited to the intergalactic police force called the Green Lantern Corps.",
                "image": "~/dc/images/greenlantern.png",
                "realName": "Hal Jordan",
                "city": "Coast City"
            },
            {
                "id": 6,
                "name": "Wonder Woman",
                "gender": "female",
                "description": "Born on Paradise Island to Queen Hippolyta of the immortal Amazons, she is known to her Amazonian sisters as Princess Diana.",
                "image": "~/dc/images/wonderwoman.png",
                "realName": "Diana",
                "city": "Themyscira"
            },
            {
                "id": 7,
                "name": "Beast Boy",
                "gender": "male",
                "description": "When he was a young boy, Gar Logan became sick with a rare disease. The untested cure for his illness not only saved his life, it also changed his skin to green and gave him the power to transform into any animal imaginable.",
                "image": "~/dc/images/beastboy.png",
                "realName": "Garfield Logan",
                "city": "unknown"
            },
            {
                "id": 8,
                "name": "Starfire",
                "gender": "female",
                "description": "An alien princess from the planet Tamaran, Starfire can fly and shoot energy bolts from her hands. Despite her powers and warrior training, Starfire's planet was conguered and she was enslaved at a very young age.",
                "image": "~/dc/images/starfire.png",
                "realName": "Koriand’r",
                "city": "unknown"
            },
            {
                "id": 9,
                "name": "Katana",
                "gender": "female",
                "description": "Trained to be a samurai warrior and martial arts expert, Tatsu Yamashiro wears a white mask to conceal her identity as the heroic vigilante Katana.",
                "image": "~/dc/images/katana.png",
                "realName": "Tatsu Yamashiro",
                "city": "Japan"
            },
            {
                "id": 10,
                "name": "Blue Beetle",
                "gender": "male",
                "description": "After bonding with an alien scarab, teenager Jaime Reyes was transformed into Blue Beetle, a rookie super hero with lots to learn about battling super villains and saving the day.",
                "image": "~/dc/images/bluebeetle.png",
                "realName": "Jaime Reyes",
                "city": "Metropolis"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsV0FBVztJQUR4QjtRQUVZLFdBQU0sR0FBa0I7WUFDNUI7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixhQUFhLEVBQUUsbUtBQW1LO2dCQUNsTCxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxVQUFVLEVBQUUsMkJBQTJCO2dCQUN2QyxNQUFNLEVBQUUsWUFBWTthQUN2QjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLGtLQUFrSztnQkFDakwsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsVUFBVSxFQUFFLGFBQWE7Z0JBQ3pCLE1BQU0sRUFBRSxRQUFRO2FBQ25CO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLGFBQWEsRUFBRSw2SUFBNkk7Z0JBQzVKLE9BQU8sRUFBRSx1QkFBdUI7Z0JBQ2hDLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixNQUFNLEVBQUUsY0FBYzthQUN6QjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixhQUFhLEVBQUUsOElBQThJO2dCQUM3SixPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxVQUFVLEVBQUUsaUJBQWlCO2dCQUM3QixNQUFNLEVBQUUsUUFBUTthQUNuQjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsYUFBYSxFQUFFLDRKQUE0SjtnQkFDM0ssT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLE1BQU0sRUFBRSxZQUFZO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixhQUFhLEVBQUUsOEhBQThIO2dCQUM3SSxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxVQUFVLEVBQUUsT0FBTztnQkFDbkIsTUFBTSxFQUFFLFlBQVk7YUFDdkI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsV0FBVztnQkFDbkIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLGFBQWEsRUFBRSxrT0FBa087Z0JBQ2pQLE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DLFVBQVUsRUFBRSxnQkFBZ0I7Z0JBQzVCLE1BQU0sRUFBRSxTQUFTO2FBQ3BCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixhQUFhLEVBQUUsdU5BQXVOO2dCQUN0TyxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxVQUFVLEVBQUUsV0FBVztnQkFDdkIsTUFBTSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGFBQWEsRUFBRSxxSkFBcUo7Z0JBQ3BLLE9BQU8sRUFBRSx3QkFBd0I7Z0JBQ2pDLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLE1BQU0sRUFBRSxPQUFPO2FBQ2xCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLGFBQWE7Z0JBQ3JCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixhQUFhLEVBQUUscUxBQXFMO2dCQUNwTSxPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxVQUFVLEVBQUUsYUFBYTtnQkFDekIsTUFBTSxFQUFFLFlBQVk7YUFDdkI7U0FDSixDQUFDO0lBVU4sQ0FBQztJQVJVLG1DQUFhLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLEVBQVU7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUF0R0QsSUFzR0M7QUF0R1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQXNHdkI7QUF0R1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vbW9kZWxzL2hlcm9cIjtcbmltcG9ydCB7IEhlcm9EZXRhaWwgfSBmcm9tIFwiLi4vbW9kZWxzL2hlcm9EZXRhaWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm9TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGhlcm9lcyA6IEhlcm9EZXRhaWxbXSA9IFtcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwiaWRcIjogMSwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTdXBlcm1hblwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZW50IHRvIEVhcnRoIGZyb20gdGhlIGR5aW5nIHBsYW5ldCBvZiBLcnlwdG9uIGFzIGEgYmFieSwgS2FsLUVsIHdhcyBmb3VuZCBieSBmYXJtZXJzLCBNYXJ0aGEgYW5kIEpvbmF0aGFuIEtlbnQuIEFkb3B0aW5nIGhpbSBhcyB0aGVpciBzb24sIHRoZXkgbmFtZWQgaGltIENsYXJrLlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9zdXBlcm1hbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVhbE5hbWVcIjogXCJLYWwtRWwsIENsYXJrIEpvc2VwaCBLZW50XCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJNZXRyb3BvbGlzXCJcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwiaWRcIjogMiwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCYXRtYW5cIiwgXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQXMgdGhlIGhhbmRzb21lIGJpbGxpb25haXJlIEJydWNlIFdheW5lIGJ5IGRheSBhbmQgYSB2aWdpbGFudCBzdXBlciBoZXJvIGJ5IG5pZ2h0LCBCYXRtYW4gd2F0Y2hlcyB0aGUgbmlnaHQgc2t5IGZvciBDb21taXNzaW9uZXIgR29yZG9uIHRvIGxpZ2h0IHRoZSBCYXQtU2lnbmFsLlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9iYXRtYW4ucG5nXCIsXG4gICAgICAgICAgICBcInJlYWxOYW1lXCI6IFwiQnJ1Y2UgV2F5bmVcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkdvdGljYVwiXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDMsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmxhc2hcIiwgXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTm90aGluZyBvdXRydW5zIFRoZSBGbGFzaCBpbiBoaXMgbGlnaHRuaW5nLWZhc3QgTWlnaHR5IE1pY3JvcyByYWNlciwgZXNwZWNpYWxseSB3aGVuIGhl4oCZcyBjaGFyZ2VkIHVwIHdpdGggaGlzIGZhdm9yaXRlIHN1cGVyIHBvd2VyZWQgZHJpbmsuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL2ZsYXNoLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZWFsTmFtZVwiOiBcIkJhcnJ5IEFsbGVuXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDZW50cmFsIENpdHlcIlxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiA0LCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvYmluXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsIFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIllvdSBtYXkgdGhpbmsgdGhhdCBSb2JpbiBkb2VzbuKAmXQgc3RhbmQgYSBjaGFuY2UgaW4gYSByYWNlIGFnYWluc3Qgb25lIG9mIEJhdG1hbuKAmXMgbW9zdCBkYW5nZXJvdXMgZm9lcywgYnV0IHRoZSBCb3kgV29uZGVyIG1heSBzdXJwcmlzZSB5b3UhIFwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9yb2Jpbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVhbE5hbWVcIjogXCJSaWNoYXJkIEdyYXlzb25cIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkdvdGljYVwiXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDUsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR3JlZW4gTGFudGVyblwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEdWUgdG8gaGlzIGFiaWxpdHkgdG8gb3ZlcmNvbWUgZmVhciwgdGVzdCBwaWxvdCBIYWwgSm9yZGFuIHdhcyB0aGUgZmlyc3QgaHVtYW4gcmVjcnVpdGVkIHRvIHRoZSBpbnRlcmdhbGFjdGljIHBvbGljZSBmb3JjZSBjYWxsZWQgdGhlIEdyZWVuIExhbnRlcm4gQ29ycHMuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL2dyZWVubGFudGVybi5wbmdcIixcbiAgICAgICAgICAgIFwicmVhbE5hbWVcIjogXCJIYWwgSm9yZGFuXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDb2FzdCBDaXR5XCIgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcImlkXCI6IDYsIFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiV29uZGVyIFdvbWFuXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQm9ybiBvbiBQYXJhZGlzZSBJc2xhbmQgdG8gUXVlZW4gSGlwcG9seXRhIG9mIHRoZSBpbW1vcnRhbCBBbWF6b25zLCBzaGUgaXMga25vd24gdG8gaGVyIEFtYXpvbmlhbiBzaXN0ZXJzIGFzIFByaW5jZXNzIERpYW5hLlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy93b25kZXJ3b21hbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVhbE5hbWVcIjogXCJEaWFuYVwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiVGhlbXlzY2lyYVwiIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiA3LCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJlYXN0IEJveVwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGVuIGhlIHdhcyBhIHlvdW5nIGJveSwgR2FyIExvZ2FuIGJlY2FtZSBzaWNrIHdpdGggYSByYXJlIGRpc2Vhc2UuIFRoZSB1bnRlc3RlZCBjdXJlIGZvciBoaXMgaWxsbmVzcyBub3Qgb25seSBzYXZlZCBoaXMgbGlmZSwgaXQgYWxzbyBjaGFuZ2VkIGhpcyBza2luIHRvIGdyZWVuIGFuZCBnYXZlIGhpbSB0aGUgcG93ZXIgdG8gdHJhbnNmb3JtIGludG8gYW55IGFuaW1hbCBpbWFnaW5hYmxlLlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9iZWFzdGJveS5wbmdcIixcbiAgICAgICAgICAgIFwicmVhbE5hbWVcIjogXCJHYXJmaWVsZCBMb2dhblwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwidW5rbm93blwiIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiA4LCBcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlN0YXJmaXJlXCIsIFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIiwgXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gYWxpZW4gcHJpbmNlc3MgZnJvbSB0aGUgcGxhbmV0IFRhbWFyYW4sIFN0YXJmaXJlIGNhbiBmbHkgYW5kIHNob290IGVuZXJneSBib2x0cyBmcm9tIGhlciBoYW5kcy4gRGVzcGl0ZSBoZXIgcG93ZXJzIGFuZCB3YXJyaW9yIHRyYWluaW5nLCBTdGFyZmlyZSdzIHBsYW5ldCB3YXMgY29uZ3VlcmVkIGFuZCBzaGUgd2FzIGVuc2xhdmVkIGF0IGEgdmVyeSB5b3VuZyBhZ2UuXCIsIFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIn4vZGMvaW1hZ2VzL3N0YXJmaXJlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZWFsTmFtZVwiOiBcIktvcmlhbmTigJlyXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJ1bmtub3duXCJcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwiaWRcIjogOSwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLYXRhbmFcIiwgXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUcmFpbmVkIHRvIGJlIGEgc2FtdXJhaSB3YXJyaW9yIGFuZCBtYXJ0aWFsIGFydHMgZXhwZXJ0LCBUYXRzdSBZYW1hc2hpcm8gd2VhcnMgYSB3aGl0ZSBtYXNrIHRvIGNvbmNlYWwgaGVyIGlkZW50aXR5IGFzIHRoZSBoZXJvaWMgdmlnaWxhbnRlIEthdGFuYS5cIiwgXG4gICAgICAgICAgICBcImltYWdlXCI6IFwifi9kYy9pbWFnZXMva2F0YW5hLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZWFsTmFtZVwiOiBcIlRhdHN1IFlhbWFzaGlyb1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiSmFwYW5cIlxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgXCJpZFwiOiAxMCwgXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCbHVlIEJlZXRsZVwiLCBcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLCBcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBZnRlciBib25kaW5nIHdpdGggYW4gYWxpZW4gc2NhcmFiLCB0ZWVuYWdlciBKYWltZSBSZXllcyB3YXMgdHJhbnNmb3JtZWQgaW50byBCbHVlIEJlZXRsZSwgYSByb29raWUgc3VwZXIgaGVybyB3aXRoIGxvdHMgdG8gbGVhcm4gYWJvdXQgYmF0dGxpbmcgc3VwZXIgdmlsbGFpbnMgYW5kIHNhdmluZyB0aGUgZGF5LlwiLCBcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJ+L2RjL2ltYWdlcy9ibHVlYmVldGxlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZWFsTmFtZVwiOiBcIkphaW1lIFJleWVzXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJNZXRyb3BvbGlzXCJcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBwdWJsaWMgZ2V0SGVyb2VzTGlzdCgpIDogSGVyb1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVyb2VzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIZXJvQnlJZChpZDogbnVtYmVyKTogSGVyb0RldGFpbCB7XG4gICAgICAgIHZhciBoZXJvID0gdGhpcy5oZXJvZXMuZmlsdGVyKGMgPT4gYy5pZCA9PSBpZCkucG9wKCk7XG4gICAgICAgIHJldHVybiBoZXJvO1xuICAgIH1cbn0iXX0=