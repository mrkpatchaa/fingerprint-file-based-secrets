/** @type {import('expo/fingerprint').Config} */
const config = {
  fileHookTransform: (source, chunk, isEndOfFile, encoding) => {
    // Remove googleServicesFile
    if (source.type === "contents" && source.id === "expoConfig") {
      const config = JSON.parse(chunk);
      delete config.android.googleServicesFile;
      delete config.ios.googleServicesFile;
      return JSON.stringify(config);
    }

    return chunk;
  },
};

module.exports = config;
