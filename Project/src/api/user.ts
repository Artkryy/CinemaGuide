import { validResponse } from "./validResponse";

export const API = "https://cinemaguide.skillbox.cc";

export const registerUser = (
  email: string,
  password: string,
  name: string,
  surname: string
) => {
  return fetch(`${API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email: email,
      password: password,
      name: name,
      surname: surname,
    }).toString(),
  }).then(() => undefined);
};

export const loginUser = (email: string, password: string) => {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email: email,
      password: password,
    }).toString(),
  })
    .then(validResponse)
    .then(data => console.log(data))
    .then(() => undefined)
};

export const fetchUser = () => {
  return fetch(`${API}/profile`)
    .then(validResponse)
    .then((response) => response.json())
    .then(data => console.log(data))
};
