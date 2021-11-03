import ElMessagePlus from './lib.js'

const install = function (Vue, defaultOpts = -1) {
  return new ElMessagePlus(Vue, defaultOpts)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export { ElMessagePlus } // if need to install as component
