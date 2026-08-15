/**
 * Bottleneck interaction QA: captures the figure in each preset state,
 * letting the sim develop after each switch. Output: shots/bn-*.png
 *   npm run build && node scripts/shoot-bottleneck.mjs
 */
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

const CHROME =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 8331;
const BASE = `http://localhost:${PORT}`;

const server = spawn('python3', ['-m', 'http.server', String(PORT)], {
  cwd: 'dist',
  stdio: 'ignore',
});
await new Promise((r) => setTimeout(r, 800));

mkdirSync('shots', { recursive: true });
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars'],
});

try {
  for (const [name, route] of [
    ['en', '/'],
    ['es', '/es/'],
  ]) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1000, deviceScaleFactor: 2 });
    await page.goto(BASE + route, { waitUntil: 'networkidle0' });
    const fig = await page.$('[data-bottleneck]');
    await fig.scrollIntoView();

    // default state ("now") after a beat of live play
    await new Promise((r) => setTimeout(r, 6000));
    await fig.screenshot({ path: `shots/bn-${name}-now.png` });
    console.log(`shots/bn-${name}-now.png`);

    for (const preset of ['2024', '2019']) {
      await page.click(`[data-preset="${preset}"]`);
      await new Promise((r) => setTimeout(r, 16000)); // let the queues migrate
      await fig.screenshot({ path: `shots/bn-${name}-${preset}.png` });
      console.log(`shots/bn-${name}-${preset}.png`);
    }

    // mobile view of the default state
    await page.goto(BASE + route, { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 360, height: 800, deviceScaleFactor: 2 });
    const fig2 = await page.$('[data-bottleneck]');
    await fig2.scrollIntoView();
    await new Promise((r) => setTimeout(r, 5000));
    await fig2.screenshot({ path: `shots/bn-${name}-360.png` });
    console.log(`shots/bn-${name}-360.png`);
    await page.close();
  }
} finally {
  await browser.close();
  server.kill();
}
