const AJV = require('ajv');
const ajv = new AJV();

const changeBalanceSchema = {
    type: 'object',
    properties: {
        userId: { type: 'integer', minimum: 1 },
        ammount: { 
            type: 'integer', 
            not: { const: 0 }
         },
    },
    required: ['userId', 'ammount'],
    additionalProperties: false,
};

const validateChangeBalance = ajv.compile(changeBalanceSchema);

module.exports = validateChangeBalance;