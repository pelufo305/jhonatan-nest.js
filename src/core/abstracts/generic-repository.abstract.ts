import { Ingredient } from "../entities";

export abstract class IGenericRepository<T> {
  abstract getByIngredient(preference: Ingredient): Promise<T[]>;
  abstract getRestaurantByID(id: any): Promise<T>;
}
