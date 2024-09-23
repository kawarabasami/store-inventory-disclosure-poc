import { describe, it } from "https://deno.land/std@0.170.0/testing/bdd.ts";
import { makeArgs, makeValuesStringPlaceholders } from "./sqlUtils.ts";
import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";

describe("makeValuesStringPlaceholders", () => {
  it("1行につき、プレースホルダーが指定したカラム数だけ作成されること", () => {
    const ret = makeValuesStringPlaceholders(1, 5);
    assertEquals(ret, "($1,$2,$3,$4,$5)");
  });
  it("複数行、想定通り動作すること", () => {
    const ret = makeValuesStringPlaceholders(3, 4);
    assertEquals(ret, "($1,$2,$3,$4),($5,$6,$7,$8),($9,$10,$11,$12)");
  });
});

describe("makeArgs", () => {
  it("1レコードの場合、配列に展開できること", () => {
    const ret = makeArgs(
      [
        {
          productId: "test-product111",
          productName: "テスト商品1",
          productCategoryId: "1",
        },
      ],
      ["productId", "productName", "productCategoryId"]
    );
    assertEquals(ret, ["test-product111", "テスト商品1", "1"]);
  });
  it("複数レコードの場合、配列に展開できること", () => {
    const ret = makeArgs(
      [
        {
          productId: "test-product111",
          productName: "テスト商品1",
          productCategoryId: "1",
        },
        {
          productId: "test-product2",
          productName: "テスト商品2",
          productCategoryId: "2",
        },
        {
          productId: "test-product3",
          productName: "テスト商品3",
          productCategoryId: "3",
        },
      ],
      ["productId", "productName", "productCategoryId"]
    );
    assertEquals(ret, [
      "test-product111",
      "テスト商品1",
      "1",
      "test-product2",
      "テスト商品2",
      "2",
      "test-product3",
      "テスト商品3",
      "3",
    ]);
  });
  it("特定項目のみ配列に展開できること", () => {
    const ret = makeArgs(
      [
        {
          productId: "test-product1",
          productName: "テスト商品1",
          productCategoryId: "1",
        },
        {
          productId: "test-product2",
          productName: "テスト商品2",
          productCategoryId: "2",
        },
      ],
      ["productId", "productCategoryId"]
    );
    assertEquals(ret, ["test-product1", "1", "test-product2", "2"]);
  });
});
