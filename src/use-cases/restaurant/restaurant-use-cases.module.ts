import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { RestaurantUseCases } from './restaurant.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [RestaurantUseCases],
  exports: [RestaurantUseCases],
})
export class RestaurantCasesModule {}