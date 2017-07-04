function onLoad(cb) {
  window.addEventListener('load', cb);
}

// 1. Define route components.
// These can be imported from other files
const Home = { template: `
<div>
  <masthead>
    <display level="3">Welcome to Dorp!</display>
    <lead>SAMPLE TEXT</lead>
  </masthead>
  <container>
    <row>
      <column span="100">
        <h3>What is Dorp?</h3>
        <p>Dorp is a website.</p>
      </column>
    </row>
  </container>
</div>
  ` }
const Projects = { template: `
<div>
  <container>
  </container>
</div>
  ` }
const About = { template: `
<div>
  <container>
  </container>
</div>
  ` }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  hashbang: false,
  routes: routes // short for `routes: routes`
})

Vue.component('masthead', {
  template: `<div class="masthead"><slot></slot></div>`
})

Vue.component('lead', {
  template: `<p class="lead"><slot></slot></p>`
})

Vue.component('container', {
  template: `<div class="container"><slot></slot></div>`
})

Vue.component('display', {
  props: ['level'],
  template: `<div :class="'display-'+level"><slot></slot></div>`,
})

Vue.component('row', {
  template: `<div class="row"><slot></slot></div>`,
})

Vue.component('column', {
  props: ['span'],
  template: '<div class="column" :style="`flex:0 0 ${span}%`"><slot></slot></div>',
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
