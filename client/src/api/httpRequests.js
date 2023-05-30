import axios from "axios";
import { BASE_URL } from "./baseURL";
var URL="";

//////////////get all///////////////////
export const getAll =async(name)=>{
    let globalData;
    if(!name){
        URL=BASE_URL+`/childrens`
    }else{
        URL=BASE_URL+`/childrens?name=${name}`;
    }
    await axios.get(URL).then((res)=>{
        globalData=res.data
    });
    return globalData
};

// GET BY ID//////
export const getByID =async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/childrens/${id}`).then((res)=>{
        globalData=res.data;
    });
    return globalData
};
/////////////post
export const postChildren=(payload)=>{
    axios.post(`${BASE_URL}/childrens`,payload)
};
///////////delete
export const deleteById=(id)=>{
    axios.delete(`${BASE_URL}/childrens/${id}`)
}

