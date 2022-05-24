/*
/api/users: GET, POST, DELETE
/api/users/:id: GET, PUT, DELETE
/api/users/published: GET
*/

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();
    // Create a new User
    router.post("/", users.create);
    // Retrieve all Users
    router.get("/", users.findAll);
   /*  // Retrieve all published Users
    router.get("/published", users.findAllPublished); */
    // Retrieve a single User with id
    router.get("/:id", users.findOne);
    // Retrieve a single User with email
    // router.get("/:email", users.findByEmail);
    // Update a User with id
    router.put("/:id", users.update);
    // Delete a User with id
    router.delete("/:id", users.delete);
    // Create a new User
    router.delete("/", users.deleteAll);
    app.use('/api/users', router);
};