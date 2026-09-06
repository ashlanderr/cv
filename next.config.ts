import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  basePath: "/cv",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // *.dev.tsx — служебные страницы вроде макета og-картинки: доступны
  // в dev-режиме и не попадают в статический экспорт.
  pageExtensions: isDev ? ["tsx", "ts", "dev.tsx"] : ["tsx", "ts"],
};

export default nextConfig;
