const mockingoose = require('mockingoose');
const Note = require("../../models/note")

// Unit Tests only test the validation built into Note

describe('mockingoose', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks()
    })

    describe("Explicit Tests", () => {
        it('Validate Model', async () => {
            const todo = new Note({
                title: "Task Note",
                description: "This is a note",
            });

            const result = await todo.validateSync();
            expect(result).toBe(undefined);
        });
    })
})
