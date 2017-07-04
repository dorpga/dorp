function onLoad(cb) {
  window.addEventListener('load', cb);
}

// 1. Define route components.
// These can be imported from other files
const Home = { template: `
<div>
  <container>
    <section class="header">
      <h2 class="title">Welcome to Dorp!</h2>
    </section>
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

Vue.component('container', { template: `<div class="container"><slot></slot></div>` });
Vue.component('navbar', { template: `<nav class="navbar"><slot></slot></nav>` });
Vue.component('navbar-list', { template: `<ul class="navbar-list"><slot></slot></ul>` });
Vue.component('navbar-item', { props: ['to'], template: `<li class="navbar-item"><router-link class="navbar-link" :to="to"><slot></slot></router-link></li>` });

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
