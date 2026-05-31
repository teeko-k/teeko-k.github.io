/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
// }

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for static export
  },
}

module.exports = nextConfig
