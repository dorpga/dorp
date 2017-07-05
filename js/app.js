function onLoad(cb) {
  window.addEventListener('load', cb);
}

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [{
    path: '/',
    component: {
      template: '#page-home'
    }
  },
  {
    path: '/products',
    component: {
      template: '#page-products'
    }
  },
  {
    path: '/about',
    component: {
      template: '#page-about'
    }
  }, {
    path: '/products/framework',
    component: {
      template: '#page-products-framework'
    }
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  hashbang: false,
  routes: routes // short for `routes: routes`
})

Vue.component('container', {
  template: `<div class="container"><slot></slot></div>`
});
Vue.component('navbar', {
  template: `<nav class="navbar"><slot></slot></nav>`
});
Vue.component('navbar-list', {
  template: `<ul class="navbar-list"><slot></slot></ul>`
});
Vue.component('navbar-item', {
  props: ['to'],
  template: '<li class="navbar-item"><router-link class="navbar-link" :to="to"><slot></slot></router-link></li>'
});
Vue.component('row', {
  template: `<div class="row"><slot></slot></div>`
});
Vue.component('column', {
  props: ['span'],
  template: '<div :class="`${span} columns`"><slot></slot></div>'
});
Vue.component('dorp-products', {
  template: '#partial-dorp-products',
  data: function() {
    return {
      products: [{
          id: 'framework',
          name: 'DorpFramework',
          description: 'The Dorp Web Framework',
          link: '/products/framework'
        },
        {
          id: 'dom',
          name: 'DorpDOM',
          description: 'A Simple DOM Utility',
          link: '/products/dom'
        }
      ]
    }
  }
});
Vue.component('dorp-product', {
  props: ['product'],
  template: '#component-dorp-product'
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router: router
}).$mount('#app')

// Now the app has started!
