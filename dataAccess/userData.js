const User = require('../models/user');
const sequelize = require('../config/database');

class UserData {
    async changeBalance(userId, ammount) {
        try {
            // Атомарное обновление баланса
            const [result] = await sequelize.query(
              `UPDATE users 
               SET balance = balance + :amount
               WHERE id = :userId AND balance + :amount >= 0 
               RETURNING balance`,
              {
                replacements: { userId, amount: ammount },
                type: sequelize.QueryTypes.UPDATE
              }
            );
        
            if (!result || result.length === 0) {
                throw new Error('Insufficient funds or user not found');
            }
        
            return result[0].balance;
        
        } catch (error) {
            throw error;
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
