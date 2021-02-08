import axios from "axios";

export default function buildClient({ req }) {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL: "http://www.app-tests-prod.xyz",
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
}
