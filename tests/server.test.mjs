import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { once } from "node:events";
import { createApp } from "../server.mjs";

let app;
let base;
before(async () => {
  app = createApp();
  app.listen(0, "127.0.0.1");
  await once(app, "listening");
  base = `http://127.0.0.1:${app.address().port}`;
});
after(() => new Promise((resolve) => app.close(resolve)));

test("serves the storefront and shared stylesheet with useful MIME types", async () => {
  const page = await fetch(base);
  assert.equal(page.status, 200);
  assert.match(page.headers.get("content-type"), /text\/html/);
  const css = await fetch(`${base}/styles.css`);
  assert.equal(css.status, 200);
  assert.match(css.headers.get("content-type"), /text\/css/);
});

test("returns 404 for missing files and private project files", async () => {
  for (const url of [
    "/does-not-exist",
    "/.env",
    "/%2e%2e%2fpackage.json",
    "/%2e%2e%5cpackage.json",
  ]) {
    assert.equal((await fetch(`${base}${url}`)).status, 404, url);
  }
});

test("rejects malformed paths and POST requests", async () => {
  assert.equal((await fetch(`${base}/%E0%A4%A`)).status, 400);
  const response = await fetch(base, { method: "POST" });
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "GET, HEAD");
});

test("HEAD returns headers without downloading a page body", async () => {
  const response = await fetch(base, { method: "HEAD" });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "");
});
