import {fetch} from '@/api/TestMember';
export const testMember = {
    namespaced:true,
    state: {
        data:'test-member'
    },
    getters: {
    },
    mutations: {
        async getData(state){
            const res = await fetch.get();
            state.data = res;
        },
        async postData(state,value){
            await fetch.post(value);
            const res = await fetch.get();
            state.data = res;
            
            /* const lastNum = state.data.length -1;
            const num = state.data[lastNum].num;            
            state.data.push({...value,num:num+1}); */
        },
        async setData(state,value){            
            await fetch.put(value);
            const data = [...state.data];
            const set = data.map((obj)=>{
                if(obj.num == value.num){
                    obj.name = value.name;
                    obj.email = value.email;
                }
                return obj;
            })
            state.data= set;
        },
        async delData(state,num){
            await fetch.delete(num);
            const data = [...state.data];
            const set = data.filter((obj)=>obj.num != num);
            state.data = set;
        }
    }
}