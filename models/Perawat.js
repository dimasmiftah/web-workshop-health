const { DataTypes } = require('sequelize');
const db = require('../database');

const Perawat = db.define('Perawat', {
  ID_Perawat: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ID_Poliklinik: DataTypes.STRING(20),
  Nama: {
    type: DataTypes.STRING(50),
  },
  Alamat: {
    type: DataTypes.TEXT,
  },
  Tgl_Lahir: {
    type: DataTypes.DATE,
  },
});

module.exports = Perawat;
