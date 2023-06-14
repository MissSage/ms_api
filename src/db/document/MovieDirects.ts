import { Base } from '../mysql';

export class MovieDirects extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'moviedirects',
    });
  }
  // 这里写特有逻辑方法
}
