import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzQwOTRlMjFiNzcxZWQxZjYzN2E0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTk3MzY5MSwiZXhwIjoxNjUyMDYwMDkxfQ.SfuD95jjp8MOWwc6VumAV5Mt1je2Vp8SgKCklF9USPc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${token}`},
})