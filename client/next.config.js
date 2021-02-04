// to fix Next not synces changes immendiately
module.expots = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
