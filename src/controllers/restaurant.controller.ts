import { Controller, Get,  Body, } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Ingredient } from '../core';
import { RestaurantUseCases } from 'src/use-cases/restaurant/restaurant.use-case';

@Controller('api/v1/restaurant')

export class RestaurantController {

    constructor(private restaurantUseCases: RestaurantUseCases) {}

    @Get('getByPreference')
    getByIngredients(@Body() lstIngredients: Ingredient) {
      return this.restaurantUseCases.getMenuByIngredient(lstIngredients);
    }

    @Get()
    getHelth(): string {
      return 'Helth OK';
    }
    
}