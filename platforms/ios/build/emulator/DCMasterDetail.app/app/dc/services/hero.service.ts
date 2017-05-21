import { Injectable } from "@angular/core";
import { Hero } from "../models/hero";
import { HeroDetail } from "../models/heroDetail";

@Injectable()
export class HeroService {
    private heroes : HeroDetail[] = [
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

    public getHeroesList() : Hero[] {
        return this.heroes;
    }

    public getHeroById(id: number): HeroDetail {
        var hero = this.heroes.filter(c => c.id == id).pop();
        return hero;
    }
}