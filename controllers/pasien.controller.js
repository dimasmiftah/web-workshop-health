const Pasien = require('../models/Pasien');

module.exports = {
  index: async (req, res) => {
    const daftar_pasien = await Pasien.findAll();
    //menambahkan komentar
    return res.render('pasien/index', {
      daftar_pasien,
    });
  },

  create: async (req, res) => {
    return res.render('pasien/create');
  },

  store: async (req, res) => {
    await Pasien.create({
      Nama: req.body.Nama,
      No_RM: req.body.No_RM,
      Alamat: req.body.Alamat,
      Jenis_Kelamin: req.body.Jenis_Kelamin,
      Pekerjaan: req.body.Pekerjaan,
    });

    return res.redirect('/pasien');
  },

  destroy: async (req, res) => {
    const pasien = await Pasien.findByPk(req.params.id);

    if (!pasien) {
      return res.redirect('/pasien');
    }

    await pasien.destroy();

    return res.redirect('/pasien');
  },
};
