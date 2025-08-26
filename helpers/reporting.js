const fs = require('fs');
const path = require('path');
const { setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require('./world');
const {allure} = require('allure-playwright');

setWorldConstructor(CustomWorld);

async function attachScreenshot(attach, page, name = 'Screenshot') {
    // Add a short wait before taking the screenshot
   // await page.waitForTimeout(500);
  const screenshotPath = path.resolve(`./reports/screenshots/${name}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  const image = fs.readFileSync(screenshotPath);

  if (attach) {
    console.log('Attaching screenshot using testInfo.attach to report with name2: ' + name);
    await attach(image, 'image/png');
  }
}

async function attachText(attach, name, isMatch, expected, actual) {


const styledLog = isMatch
  ? `
    <div style="font-family:Arial; color:#2c3e50;">
      <h3 style="color:#27ae60;">✅ Test Passed</h3>
      <p><strong>Expected:</strong> <em style="color:green;">${expected}</em></p>
      <p><strong>Actual:</strong> <em style="color:green;">${actual}</em></p>
    </div>
  `
  : `
    <div style="font-family:Arial; color:#2c3e50;">
      <h3 style="color:#e74c3c;">🚨 Test Failed</h3>
      <p><strong>Expected:</strong> <em style="color:green;">${expectedTitle}</em></p>
      <p><strong>Actual:</strong> <em style="color:red;">${actualTitle}</em></p>
    </div>
  `;
    await attach(styledLog, 'text/html', name); 
}

module.exports = { attachScreenshot, attachText };

