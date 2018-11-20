let PiGlobal = {

  // 方便Vue中使用Vue.use
  PiUse(Vue, components) {
    for (const item of components) {
      Vue.component(item.name, item);
    }
  },

  install(Vue){
    if (this.install.installed) return;
    this.components.map(
      item => Vue.component(item.name, item)
    );
  },

};

export default PiGlobal;