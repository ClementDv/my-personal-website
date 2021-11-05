const images = !process.env.IMAGES_PATH
    ? undefined
    : {
          // (see https://github.com/vercel/next.js/issues/21079#issuecomment-898732036)
          loader: 'imgix',
          path: process.env.IMAGES_PATH,
      };

module.exports = {
    basePath: process.env.BASE_PATH,
    images,
    exportPathMap: async function () {
        return {
            '/': {page: '/'},
        };
    },
};
