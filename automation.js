const { chromium } = require('playwright');

async function runAutomation() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a website (e.g., OpenAI's website)
    await page.goto('https://www.openai.com');

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });

    // Close the browser
    await browser.close();
}

runAutomation();
