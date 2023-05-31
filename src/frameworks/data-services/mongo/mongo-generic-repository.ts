import { Model,Types } from 'mongoose';
import { IGenericRepository, Ingredient } from '../../../core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }
  async getRestaurantByID(id: any): Promise<T>{
    return await this._repository.findById(id).exec();
  }

  async getByIngredient(preference: Ingredient): Promise<T[]> {
   
    var lstmenu =  await this._repository.find({ ingredients : { $all : preference.preferences }}).exec();
    return lstmenu;
    
  }

}
