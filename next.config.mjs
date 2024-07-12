import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      use: "@svgr/webpack",
      test: /\.svg$/i,
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
