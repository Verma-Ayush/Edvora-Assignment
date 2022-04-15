import axios from "axios";

const getRides = async () => {
  const url = "https://assessment.api.vweb.app/rides";
  const { data } = await axios.get(url);
  return data;
};

export default getRides;
