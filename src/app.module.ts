import { Module } from '@nestjs/common';
import {
  AppController,
  RestaurantController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { RestaurantCasesModule } from './use-cases/restaurant/restaurant-use-cases.module';



@Module({
  imports: [
    DataServicesModule,
    RestaurantCasesModule,
  ],
  controllers: [
    AppController,
    RestaurantController
  ],
  providers: [],
})
export class AppModule {}
