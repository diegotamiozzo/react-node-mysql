import { DataTypes } from 'sequelize';
import sequelize from '../utils/db.js';

const Person = sequelize.define(
  'Person',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'people',
    timestamps: true,   // createdAt / updatedAt
    underscored: false,
  }
);

/* ===============================
   FUNÇÕES USADAS PELO CONTROLLER
   =============================== */

export const getAllPeople = async () => {
  return await Person.findAll({
    order: [['createdAt', 'DESC']], // ✅ correto
  });
};

export const getPersonById = async (id) => {
  return await Person.findByPk(id);
};

export const createPerson = async (name, phone, email) => {
  return await Person.create({ name, phone, email });
};

export const updatePerson = async (id, name, phone, email) => {
  await Person.update(
    { name, phone, email },
    { where: { id } }
  );
  return getPersonById(id);
};

export const deletePerson = async (id) => {
  await Person.destroy({ where: { id } });
  return { message: 'Person deleted successfully' };
};

export default Person;
