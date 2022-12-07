const { Schema, model } = require('mongoose');

const playerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        playerScore: {
            type: Number
        },
        playerLvl: {
            type: Number
        }
    }
);

const Player = model('Player', playerSchema);
module.exports = Player;