const Perawat = require('../models/Perawat');

module.exports = {
  index: async (req, res) => {
    const daftar_perawat = await Perawat.findAll();
    //menambahkan komentar
    return res.render('perawat/index', {
      daftar_perawat,
    });
  },

  create: async (req, res) => {
    return res.render('perawat/create');
  },

  store: async (req, res) => {
    await Perawat.create({
      ID_Perawat: req.body.ID_Perawat,
      ID_Poliklinik: req.body.ID_Poliklinik,
      Nama: req.body.Nama,
      Alamat: req.body.Alamat,
      Tgl_Lahir: req.body.Tgl_Lahir,
    });

    return res.redirect('/perawat');
  },

  edit: async (req, res) => {
    const perawat = await Perawat.findByPk(req.params.id);

    if (!perawat) {
      return res.redirect('/perawat');
    }

    return res.render('perawat/edit', {
      perawat,
    });
  },

  update: async (req, res) => {
    const perawat = await Perawat.findByPk(req.params.id);

    if (!perawat) {
      return res.redirect('/perawat');
    }

    await perawat.update({
      ID_Poliklinik: req.body.ID_Poliklinik,
      Nama: req.body.Nama,
      Alamat: req.body.Alamat,
      Tgl_Lahir: req.body.Tgl_Lahir,
    });

    return res.redirect('/perawat');
  },

  destroy: async (req, res) => {
    const perawat = await Perawat.findByPk(req.params.id);

    if (!perawat) {
      return res.redirect('/perawat');
    }

    await perawat.destroy();

    return res.redirect('/perawat');
  },
};