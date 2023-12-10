import { QueryArguments } from "https://deno.land/x/postgres@v0.17.0/query/query.ts";
import { chunk } from "./arrayUtils.ts";

/**
 * この関数は、指定された行数と列数に基づいて、値のプレースホルダー文字列を生成します。
 * 例) rowCount=2, columnCount=3 の場合、"($1,$2,$3),($4,$5,$6)" を返します。
 * @param rowCount 行数
 * @param columnCount 列数
 * @returns 生成された値のプレースホルダー文字列
 */
export function makeValuesStringPlaceholders(
  rowCount: number,
  columnCount: number
) {
  const placeHolders = Array(rowCount * columnCount)
    .fill(0)
    .map((_, i) => `$${i + 1}`);
  const chunks = chunk(placeHolders, columnCount);
  const values = chunks.map((c) => `(${c.join(",")})`);
  return values.join(",");
}

/**
 * この関数は、指定されたデータとキーに基づいて、QueryArguments を生成します。
 *
 * 例)
 * data=[{id:1,name:"aaa"},{id:2,name:"bbb"}], keys=["id","name"] の場合、
 * [1,"aaa",2,"bbb"] を返します。
 * @param data
 * @param keys
 * @returns
 */
export function makeArgs<T>(data: T[], keys: (keyof T)[]): QueryArguments {
  const pArray = data.map((d) => {
    const args = keys.map((k) => d[k]);
    return args;
  });
  return pArray.flat();
}
