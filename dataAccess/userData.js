const User = require('../models/user');
const sequelize = require('../config/database');

class UserData {
    async changeBalance(userId, amount) {
        try {
            // Атомарное обновление баланса
            const [results] = await sequelize.query(
              `UPDATE users 
               SET balance = balance + :amount
               WHERE id = :userId AND balance + :amount >= 0 
               RETURNING balance`,
              {
                replacements: { userId, amount: amount },
                type: sequelize.QueryTypes.UPDATE
              }
            );
        
            if (!results || results.length === 0) {
                throw new Error('Insufficient funds or user not found');
            }
        
            return results[0].balance;
        
        } catch (error) {
            throw new Error(`Failed to update balance: ${error.message}`);
        }
    }

    async getUserById(userId) {
        const user = await User.findOne({
            where: { id: userId }
        });
        return user;
    }
    
}

module.exports = UserData;
