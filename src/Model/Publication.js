const { Model, DataTypes } = require('sequelize');
const connection = require('../dataBase/connection');

class publication extends Model {}
publication.init({
    publicationId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        autoIncrement: true,

    },
    seller: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    sequelize: connection,
    modelName: 'publication',
    paranoid: true,
    deletedAt: 'destroyTime'
    
})

module.exports = publication;