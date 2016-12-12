/**
 * Created by v-khmai on 12/12/2016.
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let products =
      [
        {id:1, name: 'Iphone 4'},
        {id:2, name: 'Ipad'},
        {id:3, name: 'Macbook'},
        {id:4, name: 'Iphone 5S'},
        {id:5, name: 'iPad Pro'},
        {id:6, name: 'iPad Mini 2'},
        {id:7, name: 'Macbook Air'},
        {id:8, name: 'Ipad Air'}
      ];
    return {products};
  }
}
