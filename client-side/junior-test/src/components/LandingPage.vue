<template>
    <div class="container mt-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1 class="text-center">Junior Test</h1>
            <button type="button" class="btn btn-success" @click="toAddProduct">Add Product</button>
        </div>

        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama Produk</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in dataProduct" :key="index">
                        <TableRow :product="product" :index="index" />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';
import TableRow from './TableRow.vue';

export default {
    components: {
        TableRow,
    },
    methods: {
        ...mapActions(useMainStore, ['fetchProducts']),
        toAddProduct() {
            this.$router.push('/add-product')
        }
    },
    computed: {
        ...mapState(useMainStore, ['dataProduct']),
    },
    created() {
        this.fetchProducts();
    },
};
</script>
  
<style scoped></style>
  