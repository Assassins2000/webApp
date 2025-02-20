const UserData = require('../dataAccess/userData');

class UserService {
    #userData;

    constructor() {
        this.#userData = new UserData();
    }

    async changeBalance(userId, ammount) {
        const user = await this.#userData.getUserById(userId);
        if (!user) throw new Error('User not found');
        const balance = await this.#userData.changeBalance(userId, ammount);
        return balance;
    }
}

module.exports = UserService;