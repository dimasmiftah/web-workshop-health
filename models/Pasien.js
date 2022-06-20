const { DataTypes } = require('sequelize');
const db = require('../database');

const Pasien = db.define('Pasien', {
  Nama: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  No_RM: {
    type: DataTypes.INTEGER,
  },
  Alamat: {
    type: DataTypes.TEXT,
  },
  Jenis_Kelamin: {
    type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
  },
  Pekerjaan: {
    type: DataTypes.STRING(20),
  },
});

module.exports = Pasien;
