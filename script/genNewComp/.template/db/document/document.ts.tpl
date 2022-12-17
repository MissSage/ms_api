import { Base } from '../../utils/mysql';

export class {{apiName}} extends Base {
  constructor() {
    super({
      schema: '{{databaseName}}',
      collection: '{{collectionName}}',
    });
  }
}
