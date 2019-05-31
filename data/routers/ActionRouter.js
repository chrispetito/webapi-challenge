const express = require("express");
const db = require("../helpers/actionModel");

const router = express.Router();

//get all actions
router.get("/", (req, res) => {
  db.get()
    .then(actions => res.status(201).json(actions))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving the actions." })
    );
});

//get action by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(action => res.status(201).json(action))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving the action." })
    );
});

//add new action
router.post("/", (req, res) => {
  db.insert(req.body)
    .then(action => res.status(201).json(action))
    .catch(err =>
      res.status(500).json({ message: "There was an error adding the action." })
    );
});

//modify action by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  db.update(id, req.body)
    .then(action => res.status(201).json(action))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error modifying the action." })
    );
});

//delete action by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(() =>
      res.status(201).json({ message: "Action has been successfully removed" })
    )
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error deleting the action." })
    );
});

module.exports = router;
