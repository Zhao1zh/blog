// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// 移除 cloudflare 适配器
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://zhaoyizhi.com", // 替换为您的实际域名
  output: "static", // 显式指定静态站点
  integrations: [mdx(), sitemap()],
});
