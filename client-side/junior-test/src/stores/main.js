import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000";

export const useMainStore = defineStore("stores", {
  state: () => {
    return {
      dataProduct: {},
      dataEditProducts: {},
      dataKategori: {},
      dataStatus: {},
    };
  },

  actions: {
    async fetchProducts() {
      try {
        const products = await axios.get(`${baseUrl}/product`);
        this.dataProduct = products.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addProducts(data) {
      try {
        await axios.post(`${baseUrl}/product`, {
          nama_produk: data.nama_produk,
          harga: data.harga,
          kategori_id: data.kategori_id,
          status_id: data.status_id,
        });
        this.router.push("/");

        Swal.fire("Success !", `Sucess to add Product`, "success");
      } catch (error) {
        console.log(error);
      }
    },
    async editProducts({ dataProducts, id }) {
      try {
        await axios({
          url: `${baseUrl}/product/${id}`,
          method: "put",
          data: dataProducts,
        });
        this.fetchProducts();
        this.router.push("/");
        Swal.fire("Success !", `Sucess to edit product`, "success");
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProducts(id) {
      try {
        await axios.delete(`${baseUrl}/product/${id}`);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            this.fetchProducts();
            this.router.push("/");
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async findProductsById(id) {
      try {
        const productFindById = await axios.get(`${baseUrl}/product/${id}`);
        this.dataEditProducts = productFindById.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAllStatus() {
      try {
        const status = await axios.get(`${baseUrl}/product/status`);
        console.log(status);
        this.dataStatus = status.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAllCategory() {
      try {
        const kategori = await axios.get(`${baseUrl}/product/kategori`);
        console.log(kategori);
        this.dataKategori = kategori.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
