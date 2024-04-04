
// api/TestMember.js
import axios from 'axios';

export const fetch = {
    create:async ()=>{
        const res = await axios(`${process.env.VUE_APP_API}/create`);
        return res.data;
    },
    get:async ()=>{
        const res = await axios(`${process.env.VUE_APP_API}`);
        return res.data;
    },
    post:async (value)=>{
        const res = await axios.post(`${process.env.VUE_APP_API}/insert`, value);
        return res.data;
    },
    put:async (value)=>{
        const res = await axios.put(`${process.env.VUE_APP_API}/update`, value);
        return res.data;
    },
    delete:async (num)=>{
        const res = await axios.delete(`${process.env.VUE_APP_API}/delete?num=${num}`);
        return res.data;
    },
}