import { Base } from '../mysql';

export class Movie extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'movie',
    });
  }
  // 这里写特有逻辑方法
}
