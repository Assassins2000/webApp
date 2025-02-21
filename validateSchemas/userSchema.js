const AJV = require('ajv');
const ajv = new AJV();

const changeBalanceSchema = {
    type: 'object',
    properties: {
        userId: { type: 'integer', minimum: 1 },
        amount: { 
            type: 'integer', 
            not: { const: 0 }
         },
    },
    required: ['userId', 'amount'],
    additionalProperties: false,
};

const validateChangeBalance = ajv.compile(changeBalanceSchema);

module.exports = validateChangeBalance;