/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        domains: ['res.cloudinary.com'],
      },
      async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'http://localhost:3000', // Permitir solicitudes desde el origen del frontend
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig




