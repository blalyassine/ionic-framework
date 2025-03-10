import AxeBuilder from '@axe-core/playwright';
import { expect } from '@playwright/test';
import { test } from '@utils/test/playwright';

test.describe('accordion: standalone', () => {
  test('should not have accessibility violations', async ({ page }) => {
    await page.goto(`/src/components/accordion/test/standalone`);

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });

  test('should not have visual regressions', async ({ page }) => {
    await page.goto(`/src/components/accordion/test/standalone`);

    await page.waitForChanges();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      `accordion-standalone-${page.getSnapshotSettings()}.png`
    );
  });
});
