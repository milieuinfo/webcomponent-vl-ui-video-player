const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlVideoPlayerPage = require('./pages/vl-video-player.page');

describe('vl-video-player', async () => {
  const vlVideoPlayerPage = new VlVideoPlayerPage(driver);

  before(() => {
    return vlVideoPlayerPage.load();
  });

  it('als gebruiker kan ik een video bekijken', async () => {
    const video = await vlVideoPlayerPage.getVideoPlayer();
    await assert.eventually.isTrue(video.isDisplayed());
  });
});
