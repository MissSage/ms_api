import { Base } from '../mysql';

export class MoviePlatforms extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'movieplatforms',
    });
  }
  // 这里写特有逻辑方法
}
