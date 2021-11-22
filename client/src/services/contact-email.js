import api from "./api";

export const contactEmail = (body) => {
  return api.post("/contact", body).then((response) => {
    const data = response.data;
    console.log(data);
  });
};
