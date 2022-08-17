import { Router } from "express";

import { insertProfile, matchProfile, getAllGames, getAllModes, getAllElos } from "../controllers/profileController.js";
import { validateProfile } from "../middlewares/joiValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";

const profileRouter = Router();

profileRouter.post("/profile", validateProfile, tokenValidation, insertProfile);
profileRouter.get("/profile", tokenValidation, matchProfile);
profileRouter.get("/profile/games", getAllGames);
profileRouter.get("/profile/modes", getAllModes);
profileRouter.get("/profile/elos", getAllElos);

export default profileRouter;
