import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',   // generate static files suitable for GitHub Pages
  site: "https://yui-tien.github.io/morphusai-kiki/", // 或是你的自訂域名
  base: "/morphusai-kiki", // 如果需要的話，設定為你的專案名稱，開頭加上斜線
});