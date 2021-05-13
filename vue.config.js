module.exports = {
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
