const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    noteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"
    },

    question: {
        type: String,
        required: true
    },

    options: [String],

    correctAnswer: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        default: "Easy"
    }
});

module.exports = mongoose.model("Question", QuestionSchema);