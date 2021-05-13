module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = '한국퀵서비스 | 1661-7773.com'; // Replace your title here
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '~open-color/open-color';
        @import 'include-media/dist/_include-media';
        @import 'include-media-export/dist/_include-media-export.scss';
        `,
      },
    },
  },
};
