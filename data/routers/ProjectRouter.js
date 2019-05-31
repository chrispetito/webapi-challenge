const express = require("express");
const db = require("../helpers/projectModel");
const actiondb = require("../helpers/actionModel");

const router = express.Router();

//get all projects
router.get("/", (req, res) => {
  db.get()
    .then(projects => res.status(201).json(projects))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving the projects." })
    );
});

//get project by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(project => res.status(201).json(project))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving this project." })
    );
});

//get project actions by id
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  db.getProjectActions(id)
    .then(actions => res.status(201).json(actions))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving the project actions." })
    );
});

//add new project
router.post("/", (req, res) => {
  db.insert(req.body)
    .then(project => res.status(201).json(project))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error adding the project." })
    );
});

//modify project by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  db.update(id, req.body)
    .then(project => res.status(201).json(project))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error modifying the project." })
    );
});

//delete project by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(() =>
      res.status(201).json({ message: "Project was successfully removed." })
    )
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error deleting the project." })
    );
});

module.exports = router;
