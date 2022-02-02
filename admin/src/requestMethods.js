import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk3Nzg0MWQyNDkzN2FkZWJiNmVjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjg5NDY3OCwiZXhwIjoxNjQzMTUzODc4fQ.HfAvvHS_z8YM6j766PSxabX2Tw8A1wQ5A_wAhSiD_4E

