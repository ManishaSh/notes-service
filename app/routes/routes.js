module.exports = app => {
  const notes = require("../controllers/controller.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", notes.create);

  // Retrieve all Notes
  router.get("/", notes.findAll);



  // Retrieve a single Tutorial with id
  router.get("/:id", notes.findOne);

  // Update a Tutorial with id
  router.put("/:id", notes.update);

  // Delete a Tutorial with id
  router.delete("/:id", notes.delete);

  // Create a new Tutorial
  router.delete("/", notes.deleteAll);

  app.use("/api/notes", router);
};
