import { readFileSync } from "fs";
import * as ts from "typescript";

const source = readFileSync("./source.ts", { encoding: "utf8" }).toString();

let result = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
});

console.log(result);
