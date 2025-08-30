const BasePage = require('./BasePage');
const getLogger = require('../helpers/logger');
const logger = getLogger('AboutUsPage');

class AboutUsPage extends BasePage {
  constructor(page) {
    super(page);
    this.historyTimeline = '.container-global-timeline';
    this.teamMemberSection ='.our-team_wrapper'
  }

  async isHistoryTimelineVisible() {
    logger.debug('Checking visibility of history timeline');
    await this.scrollToElement(this.historyTimeline);
    return this.isVisible(this.historyTimeline);
  }

    async areTeamMemberProfilesVisible() {
    logger.debug('Checking visibility of team member profiles section');
    await this.scrollToElement(this.teamMemberSection);
    return this.isVisible(this.teamMemberSection);
  }

}

module.exports = AboutUsPage;
