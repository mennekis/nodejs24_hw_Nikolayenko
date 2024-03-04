const knexLib = require("knex");
const knexConfig = require("../knexfile");

const knex = knexLib(knexConfig);

const USERS_TABLE = "USERS";

const getAllUsers = () => {
   return knex.select().from(USERS_TABLE);
};
const addUser = async (data) => {
   const [result] = await knex(USERS_TABLE).insert(data).returning("*");
   return result;
};

const getUserById = async (id) => {
   return await knex.select().from(USERS_TABLE).where({ id }).first();
};
const deleteUserById = async (id) => {
   return await knex.delete().from(USERS_TABLE).where({ id }).del();
};


module.exports = {
   addUser,
   getUserById,
   deleteUserById,
   getAllUsers,
};
