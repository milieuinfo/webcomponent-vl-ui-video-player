const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlVideoPlayerPage = require('./pages/vl-video-player.page');

describe('vl-video-player', async () => {
  let vlVideoPlayerPage;

  before(() => {
    vlVideoPlayerPage = new VlVideoPlayerPage(getDriver());
    return vlVideoPlayerPage.load();
  });

  it('als gebruiker kan ik een video bekijken', async () => {
    const video = await vlVideoPlayerPage.getVideoPlayer();
    await assert.eventually.isTrue(video.isDisplayed());
  });
});
