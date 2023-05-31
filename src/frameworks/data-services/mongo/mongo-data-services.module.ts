import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../core';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
import {
Restaurant,
RestaurantSchema,
Menu,
MenuSchema
} from './model';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: Menu.name, schema: MenuSchema },
    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
