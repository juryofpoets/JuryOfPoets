module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addCollection("poems", function(collectionApi) {
    return collectionApi.getFilteredByTag("poem").sort(function(a, b) {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
