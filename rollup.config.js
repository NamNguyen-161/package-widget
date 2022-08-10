import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import json from "@rollup/plugin-json";

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
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),
    postcss(),
    image(),
    copy({
      targets: [
        {
          src: "src/styles/global.scss",
          dest: "build",
        },
      ],
    }),
  ],
};
