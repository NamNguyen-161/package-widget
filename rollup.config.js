import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    peerDepsExternal(),
    resolve({ browser: true }),
    json({
      compact: true,
    }),
    url({
      include: ["**/*.ttf"],
      limit: Infinity,
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),
    postcss(),
    image(),
  ],
};
