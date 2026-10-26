import { test, expect } from "@playwright/test";

test("the two studies keep the same offer and usable actions", async ({
  page,
}) => {
  const offers = [];
  for (const direction of ["modernist", "postmodernist"]) {
    await page.goto(`/explorations/${direction}.html`);
    offers.push(
      (await page.locator(".study-information").innerText())
        .replace(/\s+/g, " ")
        .trim(),
    );
    await page
      .getByRole("button", { name: "Add to demo bag", exact: true })
      .click();
    await expect(page.locator("#size-error")).toBeVisible();
    await expect(page.locator("#bag-count")).toHaveText("0");
    await page.locator('input[value="M"]').check();
    await page
      .getByRole("button", { name: "Add to demo bag", exact: true })
      .click();
    await expect(page.locator("#bag-count")).toHaveText("1");
  }
  expect(offers[0]).toBe(offers[1]);
});

test("shop and live guide agree in rendered type, action and logo", async ({
  page,
}) => {
  for (const width of [1280, 375]) {
    await page.setViewportSize({ width, height: 812 });
    const identities = [];
    for (const route of ["/", "/styleguide.html"]) {
      await page.goto(route);
      const identity = {};
      for (const selector of [
        ".brand-headline",
        ".brand-support",
        ".add-button",
      ]) {
        identity[selector] = await page
          .locator(selector)
          .evaluate((element) => {
            const style = getComputedStyle(element);
            return {
              text: element.textContent.replace(/\s+/g, " ").trim(),
              font: style.fontFamily,
              size: style.fontSize,
              weight: style.fontWeight,
              style: style.fontStyle,
              color: style.color,
              background: style.backgroundColor,
            };
          });
      }
      identity.logo = await page
        .locator(".site-header .wordmark")
        .getAttribute("src");
      const logo = await page.locator(".site-header .wordmark").boundingBox();
      expect(logo.width).toBeGreaterThanOrEqual(130);
      identities.push(identity);
    }
    expect(identities[0]).toEqual(identities[1]);
  }
});

test("phone shows the product before sizes with the purchase action in reach", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const shirt = await page.locator(".shirt-image").boundingBox();
  const form = await page.locator("#product-form").boundingBox();
  const action = page.getByRole("button", {
    name: "Add to demo bag",
    exact: true,
  });
  const actionBox = await action.boundingBox();
  expect(shirt.height).toBeLessThanOrEqual(200);
  expect(shirt.y + shirt.height).toBeLessThan(form.y);
  expect(actionBox.y + actionBox.height).toBeLessThanOrEqual(812);
  await page.locator('input[value="M"]').check();
  await action.click();
  await expect(page.locator("#bag-count")).toHaveText("1");
  await page.screenshot({ path: "test-results/off-hours-phone.png" });
  await page.goto("/styleguide.html#type");
  await page.locator("#type").scrollIntoViewIfNeeded();
  await page.screenshot({ path: "test-results/off-hours-guide-phone.png" });
});
