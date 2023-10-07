import express from "express";
import * as NotesController from "../controllers/notes"

const router = express.Router();

router.get("/",NotesController.getNotes);

router.post("/",NotesController.createNotes);

router.get("/:noteId",NotesController.getNote);

router.patch("/:noteId",NotesController.updatNote);

router.delete("/:noteId",NotesController.deleteNote);

export default router;