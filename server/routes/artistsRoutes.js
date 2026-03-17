import { Router } from "express";
import {
  getAllArtist,
  getAllEvents,
  getArtistByName,
  getArtistsByEvent,
} from "../controllers/artistController.js";

const artistRouter = Router();

artistRouter.route("/events/:event").get(getArtistsByEvent);
artistRouter.route("/events").get(getAllEvents);
artistRouter.route("/artists").get(getAllArtist);
artistRouter.route("/artists/:name").get(getArtistByName);

export default artistRouter;
