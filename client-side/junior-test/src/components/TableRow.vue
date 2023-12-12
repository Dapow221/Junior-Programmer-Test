<template>
    <td>{{ index + 1 }}</td>
    <td>{{ product.nama_produk }}</td>
    <td>{{ product.harga }}</td>
    <td>{{ product.Kategori.nama_kategori }}</td>
    <td>{{ product.Status.nama_status }}</td>
    <td>
        <RouterLink type="button" class="btn btn-primary" style="margin-right: 4%;" :to="'/edit-product/' + product.id">Edit
        </RouterLink>
        <button type="button" class="btn btn-danger" @click="deleteButton">Delete</button>
    </td>
</template>
  
<script>
import { useMainStore } from '@/stores/main';
import { mapActions } from 'pinia';

export default {
    props: {
        product: Object,
        index: Number,
    },
    methods: {
        ...mapActions(useMainStore, ['findProductsById', 'deleteProducts', 'fetchProducts']),
        deleteButton() {
            this.deleteProducts(this.product.id);
        }
    },
    created() {
        this.fetchProducts();
    },
};
</script>
  
<style scoped></style>
  