<template>
    <div>
        <form :action="transbank.url" method="POST" @submit="pagar">
            <input type="hidden" name="token_ws" v-model="transbank.token">
            <input type="hidden" name="amount" v-model="transbank.amount">
            <q-btn type="submit" class="send hidden">Pagar</q-btn>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Transbank',
    data() {
        return {
            transbank:{}
        };
    },
    created(){
        this.transbank = this.$route.query.data
    },
   mounted() {
        this.pagar()
    },
    methods: {
        pagar(){
            let buton = document.querySelector('.send')
            buton.click()
        }
        // Tip: En el ambiente de integración puedes usar la tarjeta VISA 4051885600446623 para hacer pruebas simples de éxito. 
        // El CVV es 123 y la fecha de vencimiento cualquiera superior a la fecha actual. 
        // Luego para la autenticación bancaria usa el RUT 11.111.111-1 y la clave 123. Para pruebas
    }
};
</script>

<style lang="scss" scoped>

</style>