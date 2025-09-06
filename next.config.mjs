/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ignores ESLint errors during build
  },
};

export default nextConfig;
