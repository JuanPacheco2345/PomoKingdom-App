import axios from "axios";
import { Character } from "../components/character/character_interface";
import { authform } from "../components/login/login-form";
const BASE_URL: string = 'http://localhost:5000/api/v1/users';
const ITEM_URL: string = 'http://localhost:5000/api/v1/itemshop/'
let USER_ID: string | null = null;
let storedID = localStorage.getItem('id');
if (storedID) {
    USER_ID = JSON.parse(storedID);
}

const signIn = (formdata: authform) => axios.put(BASE_URL, formdata).then(res => localStorage.setItem('id', JSON.stringify(res.data.result._id)))

const signUp = (formdata: authform) => axios.post(BASE_URL, formdata).then(res => console.log(res))

const getCharacter = () => axios.get(`${BASE_URL}/character?userId=${USER_ID}`).then(res => res.data)

const getItemShop = () => axios.get(ITEM_URL).then(res =>  res.data.items);

const getTask = () => axios.get(`${BASE_URL}/tasks?userId=${USER_ID}`)

const getFriendsList = () => axios.get(`${BASE_URL}/friends/?userId=${USER_ID}`).then(res => res.data).catch(err => console.log(err))

const setName = (name: string) => axios.put(`${BASE_URL}/character`, {user_id: USER_ID, char_name: name}).catch(err => err)

const postTask = (task: string) => axios.post(`${BASE_URL}/tasks`, {user_id: USER_ID, task_name: task})

const API = {
    signUp,
    signIn,
    getCharacter,
    getItemShop,
    postTask,
    getTask,
    getFriendsList,
    setName
}
export default API;