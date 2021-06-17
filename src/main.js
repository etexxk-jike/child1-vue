import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null
function render (props = {}) {
  const { container } = props

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  render()
}

export async function bootstrap (props) {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework mount', props)
  console.log(props)
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('子应用1:', state, prev)
  })
  render(props)
}
export async function unmount () {
  console.log('[vue] unmount main framework')
  // instance.$destroy()
  // instance.$el.innerHTML = ''
  // instance = null
  // router = null
}
