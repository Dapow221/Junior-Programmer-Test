<template>
    <div class="container mt-4">
        <form @submit.prevent="submitProducts">
            <div class="mb-3">
                <label for="productName" class="form-label">Nama Produk</label>
                <input v-model="nama_produk" type="text" class="form-control" id="productName"
                    :class="{ 'is-invalid': !nama_produkIsValid }">
                <div v-if="!nama_produkIsValid" class="invalid-feedback">Nama Produk harus diisi</div>
            </div>
            <div class="mb-3">
                <label for="productPrice" class="form-label">Harga</label>
                <input v-model="harga" type="text" class="form-control" id="productPrice"
                    :class="{ 'is-invalid': !hargaIsValid }">
                <div v-if="!hargaIsValid" class="invalid-feedback">Harga harus berupa angka</div>
            </div>
            <div class="mb-3">
                <label for="productCategory" class="form-label">Kategori</label>
                <select v-model="kategori_id" class="form-control" id="productCategory">
                    <option v-for="category in dataKategori" :key="category.id" :value="category.id">{{
                        category.nama_kategori }}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="productStatus" class="form-label">Status</label>
                <select v-model="status_id" class="form-control" id="productStatus">
                    <option v-for="status in dataStatus" :key="status.id" :value="status.id">{{
                        status.nama_status }}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { useMainStore } from '@/stores/main';
import { mapActions, mapState } from 'pinia';
export default {
    props: ['dataEditProducts'],
    methods: {
        ...mapActions(useMainStore, ['fetchAllCategory', 'fetchAllStatus', 'addProducts', 'editProducts']),
        async submitProducts() {
            this.nama_produkIsValid = !!this.nama_produk.trim();
            this.hargaIsValid = !isNaN(parseFloat(this.harga)) && isFinite(this.harga);

            if (this.nama_produkIsValid && this.hargaIsValid) {
                const dataProducts = {
                    nama_produk: this.nama_produk,
                    harga: this.harga,
                    kategori_id: this.kategori_id,
                    status_id: this.status_id
                };

                if (!this.dataEditProducts) {
                    await this.addProducts(dataProducts);
                } else {
                    await this.editProducts({ dataProducts, id: this.dataEditProducts.id });
                }
            }
        }
    },
    data() {
        return {
            nama_produk: this.dataEditProducts?.nama_produk,
            harga: this.dataEditProducts?.harga,
            kategori_id: this.dataEditProducts?.kategori_id,
            status_id: this.dataEditProducts?.status_id,
            nama_produkIsValid: true,
            hargaIsValid: true,
        };
    },
    computed: {
        ...mapState(useMainStore, ['dataKategori', 'dataStatus'])
    },
    created() {
        this.fetchAllCategory();
        this.fetchAllStatus();

        if (!this.dataEditProducts) {
            this.nama_produk = ''
            this.harga = null
            this.kategori_id = null
            this.status_id = null
        }
    }
};

</script>

<style lang="scss" scoped></style>