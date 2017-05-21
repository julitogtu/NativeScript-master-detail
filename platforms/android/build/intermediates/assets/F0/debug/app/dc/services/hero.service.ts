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

    public getHeroesList() : Hero[] {
        return this.heroes;
    }

    public getHeroeById(id: number): HeroDetail {
        return this.heroes.filter(c => c.id === id).pop();
    }
}