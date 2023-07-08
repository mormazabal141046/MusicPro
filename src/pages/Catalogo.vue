<template>
<div class="q-pa-lg">
    <!-- <h6 class="q-my-sm">Catalogo</h6> -->
    <div class="q-pa-md">
        <q-table grid card-class="bg-primary text-white" title="Catálogo" :data="data" :columns="columns" row-key="name" :filter="filter" :rows-per-page-options="[10, 20]" hide-header rows-per-page-label="Resultados por página">
            <template v-slot:top-right>
                <q-input outlined rounded dense debounce="300" v-model="filter" placeholder="Buscar">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </template>
            <template v-slot:item="props">
                <q-card class="my-card  q-pa-lg" style="min-width:300px; max-width:300px; border-radius: 35px; box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.089);">
                    <q-img :src="props.row.img" style="max-width: 80%;" />
                    <q-separator />

                    <q-card-section>
                        <q-btn fab color="grey-9" :icon="getIcon(props.row.type)" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%);" />

                        <div class="row no-wrap items-start q-mt-lg column">
                            <div class="text-overlay text-grey">
                                SKU: {{ props.row.code }}
                            </div>
                            <div class="col text-h6 ellipsis">
                                {{ props.row.name }}
                            </div>

                        </div>
                        <div class="text-caption text-grey">
                            <!-- {{ props.row.description }} -->
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae blanditiis, nam qui minima sint error ea voluptates laboriosam tempore.
                        </div>

                        <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1" style="font-size:25px; font-weight: bold; font-variant-numeric:tabular-nums;">
                            ${{ formatMiles(props.row.price) }}
                        </div>
                    </q-card-section>


                    <q-card-actions class="q-pa-md flex justify-center full-width">
                        <!-- <q-btn flat round icon="event" /> -->
                        <q-btn rounded color="pink-13" icon="add_shopping_cart" class="q-px-lg q-py-xs full-width" @click="addToCart(props.row)">
                            Agregar 
                        </q-btn>
                    </q-card-actions>
                </q-card>

            </template>
        </q-table>
    </div>

</div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
    name: 'MusicProCatalogo',

    data() {
        return {
            filter: '',
            columns: [{
                    name: 'name',
                    label: 'Producto',
                    align: 'left',
                    field: 'name',
                    sortable: true
                },
                {
                    name: 'img',
                    label: '',
                    field: 'img'
                },
                {
                    name: 'price',
                    align: 'center',
                    label: 'Precio',
                    field: 'price',
                    sortable: true
                },
                {
                    name: 'description',
                    label: 'Descripcion',
                    field: 'description',
                    sortable: true
                },
                {
                    name: 'code',
                    label: 'SKU',
                    field: 'code'
                },
                {
                    name: 'type',
                    label: 'Tipo',
                    field: 'type'
                },
            ],
            data: [
                {
                    name: 'Batería electrónica Roland TD-07KV',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/167284-1200-auto?v=637801427304500000&width=1200&height=auto&aspect=true',
                    price: 1119900,
                    description: 'Lorem asdasd asdas da ',
                    code: 'GUIT-001',
                    type: 'drums',
                    qty: 1,
                },
                {
                    name: 'Guitarra eléctrica LTD LXMT 130 - White',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/179987-300-300?v=1774519744&width=300&height=300&aspect=true',
                    price: 950490,
                    description: 'Lorem asdasd asdas da ',
                    code: 'GUIT-002',
                    type: 'guitar',
                    qty: 1,
                },
                {
                    name: 'Sintetizador Roland XPS-10 - Rojo',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/182697-300-300?v=1774628189&width=300&height=300&aspect=true',
                    price: 159000,
                    description: 'Lorem asdasd asdas da ',
                    code: 'PIA-002',
                    type: 'piano',
                    qty: 1,
                },
                {
                    name: 'Guitarra eléctrica LTD EC256 VN',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/169434-300-300?v=1774463543&width=300&height=300&aspect=true',
                    price: 469900,
                    description: 'Lorem asdasd asdas da ',
                    code: 'GUIT-003',
                    type: 'guitar',
                    qty: 1,
                },
                {
                    name: 'Piano digital Kawai CA99 Rosewood',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/179160-1200-auto?v=637935051632870000&width=1200&height=auto&aspect=true',
                    price: 5719900,
                    description: 'Lorem asdasd asdas da ',
                    code: 'PIA-003',
                    type: 'piano',
                    qty: 1,
                },
                {
                    name: 'Batería acústica Tama Imperialstar IE58H6W 6 piezas HLB',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/170453-1200-auto?v=637801438526800000&width=1200&height=auto&aspect=true',
                    price: 663900,
                    description: 'Lorem asdasd asdas da ',
                    code: 'BAT-004',
                    type: 'drums',
                    qty: 1,
                },
                {
                    name: 'Audífonos de monitoreo Sennheiser HD 400 PRO',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/179304-300-300?v=1774672399&width=300&height=300&aspect=true',
                    price: 255900,
                    description: 'Lorem asdasd asdas da ',
                    code: 'AUDI-004',
                    type: 'accesory',
                    qty: 1,
                },
                {
                    name: 'Amplificador de guitarra Line 6 Spider V60 MkII - 60W',
                    img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/175492-1200-auto?v=637835677411130000&width=1200&height=auto&aspect=true',
                    price: 319900,
                    description: 'Lorem asdasd asdas da ',
                    code: 'AMP-012',
                    type: 'audio',
                    qty: 1,
                },
            ]
        };
    },
    computed:{
        ...mapState("musicModules",['cart'])
    },
    mounted() {

    },

    methods: {
        ...mapActions("musicModules",["SIGN_IN"]),
        ...mapMutations("musicModules",["SET_ADD_CART"]),
        addToCart(item){
            console.table("Table", item)
            this.SET_ADD_CART(item)
        },  
        formatMiles(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        getIcon(type){
            if(type == 'guitar') {
                return 'las la-guitar'
            }
            if(type == 'piano') {
                return 'piano'
            }
            if(type == 'drums') {
                return 'las la-drum'
            }
            if(type == 'accesory') {
                return 'category'
            }
            if(type == 'audio') {
                return 'volume_up'
            }
        }
    },
};
</script>

<style lang="scss" scoped>
    ::v-deep .q-table__grid-content{
        gap:45px !important;
        justify-content: center;

    }
</style>
