import { Injectable } from '@nestjs/common';
import { Ingredient,ResponseAll} from '../../core/entities';
import { IDataServices } from '../../core/abstracts';


@Injectable()
export class RestaurantUseCases {
    constructor(
        private dataServices: IDataServices,
    ) {}
     async getMenuByIngredient(ingredients: Ingredient): Promise<Object[]> {
        var lstMenu = await this.dataServices.menus.getByIngredient(ingredients);
         let lstResponseAll: ResponseAll[] = []; 
         for (const object of lstMenu) {
            var restaurantobj =  await this.dataServices.restaurants.getRestaurantByID(object.restaurant);
             lstResponseAll.push( {menu: object, restaurant:restaurantobj })
            
         }
        return lstResponseAll;
      }

}

