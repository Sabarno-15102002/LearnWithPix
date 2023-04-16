const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sections: [
        {
            sentenceid: {
                type: Number,
                required: true
            },
            section:{
                sentence :{
                    type: String,
                    required: true
                },
                image: {
                    public_id: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        required: true
                    }
                },
                audio: {
                    public_id: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        required: true
                    }
                }
            }
        }
    ]
}, {timestamps: true});

const newStory = mongoose.model('Story', storySchema);
module.exports = newStory;