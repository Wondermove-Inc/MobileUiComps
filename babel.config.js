module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@utils': './src/utils/utils',
          '@validate': './src/utils/validate',
          '@image': './src/assets/image',
          '@lottie': './src/assets/lottie',
          '@styles': './src/styles',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
