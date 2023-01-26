import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ["src/index.ts"],
    sourcemap: true,
    clean: true,
    dts: true,
    splitting: true,
    bundle: true,
    format: ["esm", "cjs"],  
    outDir: "../../dist"
})