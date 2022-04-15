import axios from "axios";

const getUser = async () => {
  const url = "https://assessment.api.vweb.app/user";
  const { data } = await axios.get(url);
  return data;
};

export default getUser;
