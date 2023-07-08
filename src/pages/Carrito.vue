<template>
<div class="q-pa-lg">
    <h6 class="q-my-sm">Mi Carrito</h6>
    <div class="row flex justify-between">
        <q-list bordered class="rounded-borders col q-pb-lg" style="">
            <q-item-label header>Detalle de Productos seleccionados</q-item-label>
            <template v-if="cart.length > 0">
                <q-item v-for="item in cart" :key="cart.code">
                    <q-item-section avatar>
                        <q-avatar>
                            <img :src="item.img">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section class="col-2 gt-sm">
                        <q-item-label class="q-mt-sm">SKU: {{ item.code }}</q-item-label>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label lines="1">
                            <span class="text-weight-medium">{{ item.name }}</span>
                        </q-item-label>
                        <q-item-label caption lines="1">
                            {{ item.description }}
                        </q-item-label>
                        <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                        </q-item-label>
                    </q-item-section>

                    <q-item-section>
                        <div class="flex">
                            <div>
                                <q-item-label class="text-center" caption lines="1">
                                    Cantidad
                                </q-item-label>
                                <q-item-label lines="1" class="text-center">
                                    <span class="text-weight-medium">{{ item.qty }} </span>
                                </q-item-label>
                            </div>
                            <div class="q-ml-xl">
                                <q-item-label class="text-center" caption lines="1">
                                    Precio Unit
                                </q-item-label>
                                <q-item-label lines="1" class="text-center">
                                    <span class="text-weight-medium">${{ formatMiles(item.price) }} </span>
                                </q-item-label>
                            </div>
                            <div class="q-ml-xl">
                                <q-item-label class="text-center" caption lines="1">
                                    Total Unidades
                                </q-item-label>
                                <q-item-label lines="1" class="text-center">
                                    <span class="text-weight-medium">${{ formatMiles(item.price * item.qty) }} </span>
                                </q-item-label>
                            </div>
                        </div>
                    </q-item-section>

                    <q-item-section side>
                        <div class="text-grey-8 q-gutter-xs">
                            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                        </div>
                    </q-item-section>
                </q-item>
            </template>
            <q-item v-else class="text-center full-width flex justify-center">
                No hay Productos en el Carro
            </q-item>

            <q-separator spaced />

            <q-item class="flex justify-end">
                <h6>Paga online con usando</h6>
                <q-img class="q-mx-xl" src="https://cdn-ideld.nitrocdn.com/NrdRXWlIwmxsWoUJfViQmLgTnzDpDJQe/assets/images/optimized/rev-0d44bc1/wp-content/uploads/2021/08/pagos-webpay-plus-new.png" style="height: 100%; width: 250px;" />
                <q-img src="https://cdn-ideld.nitrocdn.com/NrdRXWlIwmxsWoUJfViQmLgTnzDpDJQe/assets/images/optimized/rev-0d44bc1/wp-content/uploads/2021/08/pagos-onepay.png" style="height: 100%; width: 250px;" />
            </q-item>
        </q-list>
        <q-list bordered separator class="col-3 q-ml-md">
            <q-item clickable v-ripple class="text-center">
                <q-item-section><strong>Detalle Compra</strong></q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>
                    <q-item-label caption>Fecha/Hora</q-item-label>
                    <q-item-label>Carrito</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label caption>14-Jun-2023</q-item-label>
                    <q-item-label>18:00:56</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section>
                    <q-item-label>Documento</q-item-label>
                    <q-item-label caption>Orden de Pedido</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>#OPLKHSDDKK0085</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section>
                    <q-item-label>SubTotal</q-item-label>
                    <q-item-label caption>IVA 19%</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>${{ formatMiles(totalCompra-iva) }}</q-item-label>
                    <q-item-label caption>${{ formatMiles(iva) }}</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section>
                    <q-item-label>% Descuento</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>0</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>
                    <q-item-label class="text-h6"><strong>TOTAL A PAGAR</strong></q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label class="text-bold text-h6">${{ formatMiles(totalCompra) }}</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-btn :disabled="checkCart" rounded color="pink-13" class="q-px-lg q-py-xs full-width q-mt-xl" @click="payment()" :loading="loading">
                    FINALIZAR PAGO
                </q-btn>
            </q-item>
        </q-list>
    </div>
    <div v-if="cart.length > 0" class="row q-mt-lg">
        <q-list bordered separator class="col-4">
            <q-item clickable v-ripple class="text-center">
                <q-item-section><strong>Datos de Entrega</strong></q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon color="primary" name="pin_drop" />
                </q-item-section>
                <q-item-section>
                    <q-item-label caption>Lugar</q-item-label>
                    <q-item-label>Retiro</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Tienda Maipu</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon color="primary" name="event" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Fecha</q-item-label>
                    <q-item-label caption>Programada</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>25-Jun-2023</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon color="primary" name="account_circle" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Titular</q-item-label>
                    <q-item-label caption>Retiro</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Pedro Perez</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon color="primary" name="phone_iphone" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Celular</q-item-label>
                    <q-item-label caption>Contacto</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>+569 35431 8445</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon color="primary" name="mail_outline" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Email</q-item-label>
                    <q-item-label caption>Contacto</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>pperez@gmail.com</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </div>

</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import axios from 'axios'
import { errorAlert, infoAlert, successAlert } from "src/utils/notify";
import { mapMutations } from 'vuex' 

export default {
    name: 'MusicProCarrito',

    data() {
        return {
            loading:false
        };
    },
    computed: {
        ...mapState("musicModules", ["cart"]),
        // ...mapMutations(""),
        totalCompra() {
            let total = this.cart.reduce((acc, item) => acc + (item.qty * item.price), 0)
            return Math.trunc(total)
        },
        iva() {
            return Math.trunc(this.totalCompra * 0.19)
        },
        checkCart() {
            return this.cart.length == 0 ? true : false
        }
    },
    mounted() {},

    methods: {
        formatMiles(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        async payment() {
            let buy_order = "100200300500"
            let amount = this.totalCompra
            let session_id = "1232374892"
            let return_url = "http://localhost:8080/payment-transaction"
            let url = "http://localhost:9900/api/payment/transbank/create"
            let data = {
                    'buy_order' : buy_order,
                    'amount' : amount,
                    'session_id': session_id,
                    'return_url' : return_url
                }
            await axios({
                method:'POST',
                url: url,
                params: data,
                headers:{
                    "Content-Type":"application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials':true
                },
            }).then(async data => {
                await this.$router.push({path:'/payment', query:{data:data.data}})
            }).catch(error => {
                console.log("error", error);
            })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>
