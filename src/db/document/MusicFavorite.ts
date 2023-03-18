import { Base } from '../mysql';

export class MusicFavorite extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'musicfavorite',
    });
  }
  // 这里写特有逻辑方法
}
