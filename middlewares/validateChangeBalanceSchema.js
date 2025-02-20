const changeBalanceSchema = require('../validateSchemas/userSchema');

const validate = (req, res, next) => {
    const valid = changeBalanceSchema(req.body);
    if (!valid) return res.status(400).json({ message: 'Invalid request' });
    next();
};

module.exports = validate;