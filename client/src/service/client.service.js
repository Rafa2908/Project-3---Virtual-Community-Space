import axios from "axios";

const unityInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllEvents = async () => {
  try {
    const res = await unityInstance.get("/events");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getArtistsByEvent = async (event) => {
  try {
    const res = await unityInstance.get(`/events/${encodeURIComponent(event)}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllArtist = async () => {
  try {
    const res = await unityInstance.get("/artists");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getArtistByName = async (name) => {
  try {
    const res = await unityInstance.get(`/artists/${encodeURIComponent(name)}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
