import { get, commonBefore, commonAfter } from "./nuxt";

describe("module", () => {
  beforeAll(commonBefore());

  afterAll(commonAfter);

  test("render", async () => {
    const html = await get("/");
    expect(html).toContain("Works!");
  });

  test("admin", async () => {
    const html = await get("/admin/");
    expect(html).toMatchSnapshot();
  });
});
