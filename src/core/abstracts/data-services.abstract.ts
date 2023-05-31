import { Restaurant,Menu } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  

  abstract restaurants: IGenericRepository<Restaurant>;

  abstract menus: IGenericRepository<Menu>;
}
