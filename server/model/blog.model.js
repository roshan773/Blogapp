const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    tags: {
        type: [String],
        default: []
    },

    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fHww"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("blog", blogSchema)

module.exports = Blog