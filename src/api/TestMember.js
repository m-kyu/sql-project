
// api/TestMember.js
import axios from 'axios';

export const fetch = {
    create:async ()=>{
        const res = await axios('http://localhost:3000/vue/create');
        return res.data;
    },
    get:async ()=>{
        const res = await axios('http://localhost:3000/vue');
        return res.data;
    },
    post:async (value)=>{
        const res = await axios.post('http://localhost:3000/vue/insert', value);
        return res.data;
    },
    put:async (value)=>{
        const res = await axios.put('http://localhost:3000/vue/update', value);
        return res.data;
    },
    delete:async (num)=>{
        const res = await axios.delete(`http://localhost:3000/vue/delete?num=${num}`);
        return res.data;
    },
}