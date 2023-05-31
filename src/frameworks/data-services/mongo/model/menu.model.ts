import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Restaurant } from './';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop()
  title: string;

  @Prop()
  ingredients: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurants', required: true  })
  restaurant: Restaurant;

}

export const MenuSchema = SchemaFactory.createForClass(Menu);