const express = require("express");
const db = require("../helpers/actionModel");
const projectdb = require('../helpers/projectModel');

const router = express.Router();

//get all actions
router.get("/", (req, res) => {
  db.get()
    .then(actions => res.status(200).json(actions))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving the actions." })
    );
});

//get action by id
router.get("/:id", verifyProjectId, (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(action => res.status(200).json(action))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving the action." })
    );
});

//add new action
router.post("/", validateAction, (req, res) => {
  db.insert(req.body)
    .then(action => res.status(201).json(action))
    .catch(err =>
      res.status(500).json({ message: "There was an error adding the action." })
    );
});

//modify action by id
router.put("/:id", verifyProjectId, validateAction, (req, res) => {
  const { id } = req.params;
  db.update(id, req.body)
    .then(action => res.status(200).json(action))
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

async function verifyProjectId(req, res, next) {
    const{ project_id } = req.body
    const action = await projectdb.get(project_id)
    if(!action) {
        res.status(404).json({ message: 'Invalid User ID'})
    } else {
        next();
    }
}

function validateAction(req, res, next) {
    const { description, notes } = req.body;
    if (!description || !notes) {
        res.status(404).json({ message: 'Description and notes fields are required'})
    } else if (description.length > 128) {
        res.status(404).json({ message: 'Description is too long. Please limit to 128 characters'})
    } else {
        next();
    }
}

module.exports = router;
