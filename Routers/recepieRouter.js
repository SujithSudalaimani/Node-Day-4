import express from "express";
import {
  createRecepie,
  deleteRecepie,
  getAllRecepies,
  getRecepiesById,
  updateRecepie,
} from "../Controllers/recepieController.js";

const router = express.Router();

router.post("/create", createRecepie);
router.get("/getData", getAllRecepies);
router.get("/getData/:id", getRecepiesById);
router.put("/update/:id", updateRecepie);
router.delete("/delete/:id", deleteRecepie)

export default router;
