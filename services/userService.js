const UserData = require('../dataAccess/userData');

class UserService {
    #userData;

    constructor() {
        this.#userData = new UserData();
    }

    async changeBalance(userId, amount) {
        const user = await this.#userData.getUserById(userId);
        if (!user) throw new Error('User not found');
        const balance = await this.#userData.changeBalance(userId, amount);
        return balance;
    }
}

module.exports = UserService;