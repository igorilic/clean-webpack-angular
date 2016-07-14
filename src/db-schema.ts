import { DBSchema } from '@ngrx/db';


/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
const schema: DBSchema = {
  version: 1,
  name: 'app',
  stores: {
    
  }
};


export default schema;
