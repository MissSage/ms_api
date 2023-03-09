import { Base } from '../mysql';

export class MovieTypes extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'movietypes',
    });
  }
  // 这里写特有逻辑方法
}
