import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByLabel("Email").fill("sample100@test.com");
  await page.getByLabel("Password").fill("M12345");
  await page.locator(".login-button").click();
});
