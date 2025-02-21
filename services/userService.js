const UserData = require('../dataAccess/userData');

class UserService {
    #userData;

    constructor() {
        this.#userData = new UserData();
    }

    /**
     * Changes user's balance by the specified amount
     * @param {number} userId - The user's ID
     * @param {number} amount - The amount to change (positive or negative)
     * @returns {Promise<number>} Updated balance
     * @throws {Error} If user not found or invalid amount
     */
    async changeBalance(userId, amount) {
        const user = await this.#userData.getUserById(userId);
        if (!user) throw new Error('User not found');
        
        const balance = await this.#userData.changeBalance(userId, amount);
        return balance;
    }
}

module.exports = UserService;