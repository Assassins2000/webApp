const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.bulkInsert('users', [
            {
                name: 'John Doe',
                balance: 10000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    }
}