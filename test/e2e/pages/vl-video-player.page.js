const VlVideoPlayer = require('../components/vl-video-player');
const {Page, Config} = require('vl-ui-core').Test;

class VlVideoPlayerPage extends Page {
  async getVideoPlayer() {
    return this._getVideoPlayer('[is="vl-video-player"]');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-video-player.html');
  }

  async _getVideoPlayer(selector) {
    return new VlVideoPlayer(this.driver, selector);
  }
}

module.exports = VlVideoPlayerPage;
