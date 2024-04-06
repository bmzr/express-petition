const sequelize = require ('../db')
const { Model, DataTypes } = require('sequelize')

class Signature extends Model {

    static async checkDuplicateEmail(email){
        try {
            const duplicate = await Signature.findByPk(email)
            if(duplicate){
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return true
        }
    }

}

Signature.init({
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Signature'
});

module.exports = Signature