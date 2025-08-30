const BasePage = require('./BasePage');

class AboutUsPage extends BasePage {
  constructor(page) {
    super(page);
    this.historyTimeline = '.container-global-timeline';
    this.teamMemberSection ='.our-team_wrapper'
  }

  async isHistoryTimelineVisible() {
    await this.page.locator(this.historyTimeline).scrollIntoViewIfNeeded();
    return this.page.isVisible(this.historyTimeline);
  }

    async areTeamMemberProfilesVisible() {
    await this.page.locator(this.teamMemberSection).scrollIntoViewIfNeeded();
    return this.page.isVisible(this.teamMemberSection);
  }

}

module.exports = AboutUsPage;
