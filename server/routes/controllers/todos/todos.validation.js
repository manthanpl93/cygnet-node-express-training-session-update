const { check } = require('express-validator')

class TodosValidator {
    constructor() {
        this.createFields = [check('text', "This text field should be there in request").exists(),
        check('text', 'This text must be 3+ characters long').isLength({ min: 3 }),
        check('completed', 'The completed field should be there in request').exists(),
        check('completed', 'The completed field must be a boolean value').isBoolean()
        ]
    }

    create() {
        return this.createFields
    }
}

module.exports = new TodosValidator()