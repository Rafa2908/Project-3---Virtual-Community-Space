import { client } from "../config/database.js";

export const getAllArtist = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM events;");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving data." });
  }
};

export const getArtistByName = async (req, res) => {
  const { name } = req.params;
  try {
    const result = await client.query("SELECT * FROM events WHERE name=$1", [
      name,
    ]);
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving data." });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const result = await client.query(
      "SELECT DISTINCT event, flyer FROM events",
    );
    return res.status(200).json(result.rows);
  } catch (error) {}
};

export const getArtistsByEvent = async (req, res) => {
  const { event } = req.params;

  try {
    const result = await client.query("SELECT * FROM events WHERE event=$1", [
      event,
    ]);
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving data." });
  }
};
