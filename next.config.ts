import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    allowedDevOrigins: ['192.168.100.7'],

    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true, // Use true for a 308 permanent redirect, or false for a 307 temporary redirect
            },
        ];
    },
}

export default nextConfig
