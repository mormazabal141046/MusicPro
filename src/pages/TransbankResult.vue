<template>
    <div class="q-pa-xl">
        <q-card class="my-card">
            <div class="flex justify-between items-center q-px-xl">
                <h6 class="q-mr-lg"><strong>ORDEN DE PEDIDO #{{ result.data.buy_order }}</strong></h6>
                <img src="~assets/verificar.png" style="height: 100%; width: 80px;">
            </div>

            <q-card-section class="q-pt-none">
            <q-list bordered class="rounded-borders col q-pb-lg" style="">                
            <q-item class="text-center full-width flex justify-center q-pa-xl column items-center">
                <q-img v-if="result.status == 'Success'" class="img-result" src="~assets/pago-ok.png" alt="Icono" />
                <q-img v-else class="img-result" src="~assets/pago-error.png" alt="Icono" />
                <div class="text-h6 q-mt-lg">{{ message }}</div>
            </q-item>

        </q-list>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { mapState }  from 'vuex'
export default {
    name: 'TransbankResult',

    data() {
        return {
            result:{}
        };
    },
    created(){
        this.result = this.$route.params
        console.log("this.result", this.result);
    },
    mounted() {
        
    },
    computed:{
        ...mapState("musicModules",["cart"]),
        totalCompra() {
            let total = this.cart.reduce((acc, item) => acc + (item.qty * item.price), 0)
            return Math.trunc(total)
        },
        iva() {
            return Math.trunc(this.totalCompra * 0.19)
        },
        message(){
            return this.result.status == "Success" ? "Pago Realizado!" : "No se pudo realizar el Pago"
        },
        // setIcon(){
        //     return this.result.status == "Success" ? "~assets/pago-ok.png" : "~assets/pago-error.png"
        // }
    },
    methods: {
        formatMiles(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        setIcon(){
            return this.result.status == "Success" ? "~assets/pago-ok.png" : "~assets/pago-error.png"
        }
    },
};
</script>

<style lang="scss" scoped>
    .img-result{
        width: 15% !important;
        padding: 30px;
    }
</style>