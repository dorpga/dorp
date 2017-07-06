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
    path: '/products/plates',
    component: {
      template: '#page-products-plates',
      data: function() {
        return {
          helpers: [{
              name: 'Variable',
              code: `My Favorite color is {{favorite}}.`,
              description: 'Variable'
            },
            {
              name: 'If',
              code: `<@
  color
{% else %}
  colour
{% endif %}`,
              description: "The `if` and `else` helpers are used in conditional statements."
            },
            {
              name: 'For',
              code: `<ul>
  {% for fruit in fruits %}
    <li>{{fruit}}</li>
  {% endfor %}
</ul>`,
              description: "The `for` helper is used in for loops."
            },
          ]
        }
      }
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
Vue.component('icon', {
  props: ['name'],
  template: '<span :class="`fa fa-${name}`"></span>'
});
Vue.component('mediaitem', {
  props: ['title', 'description', 'link', 'image'],
  template: '<div class="media-item"><div class="media-image"><img :src="image" :alt="title" height="64" width="64" /></div><div class="media-text"><h4 style="margin-bottom:0">{{title}}</h4><p>{{description}}</p></div></div>'
});
Vue.component('dorp-products', {
  template: '#partial-dorp-products',
  data: function() {
    return {
      products: [{
          id: 'plates',
          name: 'DorpPlates',
          description: 'The Dorp template engine',
          link: '/products/plates'
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

Vue.use(VueMarkdown);

const app = new Vue({
  router: router
}).$mount('#app')

// Now the app has started!
