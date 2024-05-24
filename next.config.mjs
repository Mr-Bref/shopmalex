/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add the html-loader rule for .html files
        config.module.rules.push({
            test: /\.html$/,
            use: 'html-loader',
        });
        return config
    }
}

export default nextConfig;
