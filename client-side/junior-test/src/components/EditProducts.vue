<template>
    <div class="container mt-4">
        <FormAddEditVue :dataEditProducts="dataEditProducts" />
    </div>
</template>

<script>
import FormAddEditVue from './FormAddEdit.vue';
import { useMainStore } from '@/stores/main';
import { mapActions, mapState } from 'pinia';
export default {
    components: {
        FormAddEditVue
    },
    methods: {
        ...mapActions(useMainStore, ['findProductsById'])
    },
    computed: {
        ...mapState(useMainStore, ['dataEditProducts'])
    },
    async beforeRouteEnter(to, from, next) {
        const store = useMainStore();
        await store.findProductsById(to.params.id);
        next(vm => {
            // view model
            vm.dataEditProducts = store.dataEditProducts;
        });
    },
}
</script>

<style lang="scss" scoped></style>