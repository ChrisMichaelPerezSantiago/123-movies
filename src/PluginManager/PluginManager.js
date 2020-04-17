class PluginManager {
  constructor(plugins){
    this.plugins = plugins;
  }
  async getMovies(page){
    const res = await Promise.all(this.plugins.map(plugin => plugin.getMovies(page)));
    return res;
  };

  async getTVSeries(page){
    const res = await Promise.all(this.plugins.map(plugin => plugin.getTVSeries(page)));
    return res;
  };

  async getVideoURL(url){
    const res = await Promise.all(this.plugins.map(plugin => plugin.getVideoURL(url)));
    return res;
  };
};

module.exports = PluginManager;