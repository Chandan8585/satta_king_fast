// next.config.mjs
export default {
    webpack: (config, { isServer }) => {
      // For all files with a `.txt` extension, use raw-loader
      config.module.rules.push({
        test: /\.txt$/,
        use: 'raw-loader',
      });
  
      return config;
    },
  };
  
  