import type { NextConfig } from "next";
// import Icons from "unplugin-icons/loaders";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  // webpack(config) {
  //   config.plugins.push(
  //     Icons({
  //       compiler: "jsx",
  //       jsx: "react",
  //     })
  //   );
  //   return config;
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

export default nextConfig;
