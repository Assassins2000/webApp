const UserService = require('../services/userService');

class UserController {
    #userService;

    constructor() {
        this.#userService = new UserService();
    }

    async changeBalance(req, res) {
        const { userId, ammount } = req.body;
        try {
            const balance = await this.#userService.changeBalance(userId, ammount);
            res.status(200).json({balance});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = UserController;    