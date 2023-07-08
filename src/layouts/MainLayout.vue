<template>
  <q-layout view="lHh LpR lFr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          MusicPRO
        </q-toolbar-title>
        <q-chip color="grey-9" text-color="white" class="cursor-pointer">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg">
          </q-avatar>
          Pedro Perez
          <q-menu :offset="[0,15]">
            <div class="row no-wrap q-pa-md">
              <div class="column justify-between">
                <div class="q-mb-xs"><b>Pedro Perez</b></div>
                <div>
                  <div class="text-caption">Cliente</div>
                  <div class="text-caption">pperez@gmail.com</div>
                </div>
                  <q-btn color="secondary" label="Contraseña" unelevated size="sm"  class="q-mt-sm" @click="showModal = !showModal" v-close-popup />
              </div>
              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center justify-between">
                <div class="text-caption q-mb-xs"><b>PERFIL</b></div>

                <q-avatar size="52px" class="q-mb-md">
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg">
                </q-avatar>


                <q-btn
                  color="primary"
                  label="Salir"
                  unelevated
                  size="sm"
                  @click="logout"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-chip>
        <q-btn rounded round icon="shopping_cart" unelevated color="primary" dense size="md" title="" type="a" to="/mi-carrito">
          <q-badge color="red" floating>{{ cart.length }}</q-badge>
          <q-tooltip content-class="bg-grey-8" :offset="[10, 15]">
            Mi Carrito
          </q-tooltip>
        </q-btn>
  
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-1"
    >
    <q-scroll-area style="height: calc(100% - 180px); margin-top: 180px; border-right: 1px solid #ddd;">

      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menú
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-scroll-area>
      <q-img class="absolute-top" src="~assets/fondo-avatar.jpg" style="height: 180px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/avatar1.jpg">
            </q-avatar>
            <div class="text-weight-bold">Pedro Perez</div>
            <div>Cliente</div>
            <div>pperez@gmail.com</div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Mi Tienda',
    caption: 'Administración de la tienda',
    icon: 'las la-store-alt',
    link: '/'
  },
  {
    title: 'Catálogo',
    caption: 'Listado de Instrumentos',
    icon: 'las la-guitar',
    link: '/catalogo'
  },
  // {
  //   title: 'Mis Compras',
  //   caption: 'Historial de compras',
  //   icon: 'las la-shopping-bag',
  //   // icon: 'las la-vial',
  //   link: 'mis-compras'
  // },
  {
    title: 'Carrito de Compra',
    caption: 'Productos a comprar',
    icon: 'las la-shopping-cart',
    link: '/mi-carrito'
  },
]
import {mapState} from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      showModal:false,
      essentialLinks: linksData
    }
  },
  computed:{
    ...mapState("musicModules",['cart'])

  },
  mounted(){
  },
  methods:{
    async logout(){
       
    },
    closeModal(){
      this.showModal = false;
    },
    async changePassword(password){
    }
  }
}
</script>
<style>
  .bg-transparent{
    background: rgba(0, 0, 0, 0.47) !important;
    top: 0;
  }
</style>