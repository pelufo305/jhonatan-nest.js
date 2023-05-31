import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  title: string;

  @Prop()
  type: string;

  @Prop()
  speciality: string;

}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
