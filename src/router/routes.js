
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/catalogo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Catalogo.vue') }
    ]
  },
  {
    path: '/mi-carrito',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Carrito.vue') }
    ]
  },
  {
    path: '/mis-compras',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Carrito.vue') }
    ]
  },
  {
    path: '/payment',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Transbank.vue'), props: true, name:'payment' }
    ]
  },
  {
    path: '/payment-transaction',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TransbankOK.vue'), props: true, name:'payment-transaction' }
    ]
  },
  {
    path: '/payment-result',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TransbankResult.vue'), props: true, name:'payment-result' }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
