const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

// Define the root directories
const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

// Get the default Expo Metro configuration
const defaultConfig = getDefaultConfig(projectRoot);

// Enhance the Metro configuration with NativeWind
const config = withNativeWind(defaultConfig, { input: './global.css' });

// Watch all files within the monorepo
config.watchFolders = [monorepoRoot];

// Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Ensure correct resolution of React Native files in monorepos
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = config;
