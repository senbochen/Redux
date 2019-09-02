import {get} from 'axios';
const ADD='ADD';
const REQUEST='REQUEST'

const data={
            text:"我是仓库里的第一条数据",
            color:"green",
            data:[]
}

const reducer=(state=data,action)=>{
            switch(action.type){
                    case ADD:
                       
                    return{...state,...action.data}
                    case REQUEST:
                            console.log({...state,...action.data})
                        return{...state,...action.data}
                    default :
                    return {...state}
            }
}

const add=(data)=>{
    return{
            type:ADD,data:data
    }
}
const  qurest=()=>{
    return (dispatch)=>{
            getPostRequest().then(res=>{
                console.log(res.data,dispatch)
                dispatch({
                    type:REQUEST,
                    data:res.data
                })
            })  
          
    }
}
function getPostRequest(){
            return get('https://www.easy-mock.com/mock/5c36b5d2be0a1c39bfd57589/img/page=1')
}
export {add,qurest};
export {reducer}