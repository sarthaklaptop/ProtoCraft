/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate" : "commonjs utf-8-validate",
            "bufferutil" : "commonjs bufferutil",
            "canvas" : "commonjs canvas",
        })

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'liveblocks.io',
                port: ''
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    },

    // the code below was showing this error :- 
    // Module parse failed: Unexpected character '�' (1:0) You may need an appropriate loader 
    // to handle this file type, currently no loaders are configured to process this file. See 
    // https://webpack.js.org/concepts#loaders (Source code omitted for this binary file)


    webpack: (config) => {
        config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
        return config;
    },
    
    
};

export default nextConfig;
