import { Base } from '../mysql';

export class MovieTags extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'movietags',
    });
  }
  // 这里写特有逻辑方法
}
