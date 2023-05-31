import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Restaurant,
 RestaurantDocument,
  Menu,
  MenuDocument
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  restaurants: MongoGenericRepository<Restaurant>;
  menus: MongoGenericRepository<Menu>;


  constructor(
    @InjectModel(Restaurant.name)
    private RestaurantRepository: Model<RestaurantDocument>,
    @InjectModel(Menu.name)
    private MenuRepository: Model<MenuDocument>,
  ) {}

  onApplicationBootstrap() {
    this.menus = new MongoGenericRepository<Menu>(this.MenuRepository, [
      'restaurant'
    ]);
    this.restaurants = new MongoGenericRepository<Restaurant>(this.RestaurantRepository);
   
  }
}
