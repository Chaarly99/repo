const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: email,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    passwd: {
        type: password,
        required: true,
        minlength: 3
    },
    age: {
        type: Number,
        require: true,
    },
    weight: {
        type: Number,
        require: true,
    },
    height: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    activity: {
        type: String,
        require: true,
    }
    
},{
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;