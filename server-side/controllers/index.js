const { Produk, Kategori, Status } = require("../models/");

class Controller {
  static async readAllProducts(req, res, next) {
    try {
      const product = await Produk.findAll({
        include: [Kategori, Status],
        where: {
          "$Status.nama_status$": "bisa dijual",
        },
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
  static async addProducts(req, res, next) {
    try {
      const { nama_produk, harga, kategori_id, status_id } = req.body;
      const product = await Produk.create({
        nama_produk,
        harga,
        kategori_id,
        status_id,
      });
      res.status(201).json({ message: "Done add new product" });
    } catch (error) {
      next(error);
    }
  }
  static async editProducts(req, res, next) {
    try {
      const { id } = req.params;
      const editProduct = await Produk.findByPk(id);

      if (!editProduct) {
        throw { name: "Data Not Found" };
      }

      const { nama_produk, harga, kategori_id, status_id } = req.body;
      const editedProduct = await Produk.update(
        {
          nama_produk,
          harga,
          kategori_id,
          status_id,
        },
        { where: { id } }
      );

      if (!editedProduct) {
        throw { name: "Cannot Edit Product" };
      }

      res.status(201).json({
        message: `Done edit product dari id ${id}`,
        editProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProducts(req, res, next) {
    try {
      const { id } = req.params;
      await Produk.destroy({
        where: { id },
      });

      res.status(200).json({
        message: `Done delete product dari id ${id}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findProductById(req, res, next) {
    try {
      const { id } = req.params;
      const products = await Produk.findByPk(id, {
        include: [Kategori, Status],
      });

      if (!products) {
        throw { name: "Data Not Found" };
      }
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  static async readAllKategori(req, res, next) {
    try {
      const kategori = await Kategori.findAll();
      res.status(200).json(kategori);
    } catch (error) {
      next(error);
    }
  }

  static async readAllStatus(req, res, next) {
    try {
      const status = await Status.findAll();
      res.status(200).json(status);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
