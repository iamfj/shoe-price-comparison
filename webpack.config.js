let Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

module.exports = Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('frontend', './assets/frontend/js/frontend.ts')
  .enableSassLoader()
  .enableTypeScriptLoader()
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableIntegrityHashes(Encore.isProduction())
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })
  .getWebpackConfig();
