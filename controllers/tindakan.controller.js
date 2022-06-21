const Tindakan = require('../models/Tindakan');

module.exports = {
  index: async (req, res) => {
    const daftar_tindakan = await Tindakan.findAll();
    //menambahkan komentar
    return res.render('tindakan/index', {
      daftar_tindakan,
    });
  },

  create: async (req, res) => {
    return res.render('tindakan/create');
  },

  store: async (req, res) => {
    await Tindakan.create({
      No_Registrasi: req.body.No_Registrasi,
      ID_Perawat: req.body.Id_Perawat,
      Nama_Pasien: req.body.Nama_Pasien,
      No_Ruang: req.body.No_Ruang,
      Tindakan_Keperawatan: req.body.Tindakan_Keperawatan,
      Jam: req.body.Jam,
      Keterangan: req.body.Keterangan,
    });

    return res.redirect('/tindakan');
  },

  edit: async (req, res) => {
    const tindakan = await Tindakan.findByPk(req.params.id);

    if (!tindakan) {
      return res.redirect('/tindakan');
    }

    return res.render('tindakan/edit', {
      tindakan,
    });
  },

  update: async (req, res) => {
    const tindakan = await Tindakan.findByPk(req.params.id);

    if (!tindakan) {
      return res.redirect('/tindakan');
    }

    await tindakan.update({
      ID_Perawat: req.body.Id_Perawat,
      Nama_Pasien: req.body.Nama_Pasien,
      No_Ruang: req.body.No_Ruang,
      Tindakan_Keperawatan: req.body.Tindakan_Keperawatan,
      Jam: req.body.Jam,
      Keterangan: req.body.Keterangan,
    });

    return res.redirect('/tindakan');
  },

  destroy: async (req, res) => {
    const tindakan = await Tindakan.findByPk(req.params.id);

    if (!tindakan) {
      return res.redirect('/tindakan');
    }

    await tindakan.destroy();

    return res.redirect('/tindakan');
  },
};