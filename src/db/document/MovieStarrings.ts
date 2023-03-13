import { Base } from '../mysql';

export class MovieStarrings extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'moviestarrings',
    });
  }
  // 这里写特有逻辑方法
}
