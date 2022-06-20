const { DataTypes } = require('sequelize');
const db = require('../database');
const Pasien = require('../models/Pasien');
const Perawat = require('../models/Perawat');

const Tindakan = db.define('Tindakan', {
  No_Registrasi: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  No_Ruang: DataTypes.STRING(10),
  Diagnosa: {
    type: DataTypes.TEXT,
  },
  Tindakan_Keperawatan: {
    type: DataTypes.TEXT,
  },
  Jam: {
    type: DataTypes.TIME,
  },
  Keterangan: {
    type: DataTypes.TEXT,
  },
});

Tindakan.belongsTo(Pasien, {
  foreignKey: 'Nama_Pasien',
  targetKey: 'Nama',
});

Tindakan.belongsTo(Perawat, {
  foreignKey: 'ID_Perawat',
  targetKey: 'ID_Perawat',
});

module.exports = Tindakan;
