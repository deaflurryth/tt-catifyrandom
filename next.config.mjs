/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	experimental: {
		scrollRestoration: true,
		missingSuspenseWithCSRBailout: false,
	},
}

export default nextConfig
