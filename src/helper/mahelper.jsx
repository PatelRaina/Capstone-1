import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export function attempts_Number(maresult){
    return maresult.filter(r=>r!==undefined).length;
}
/* export function earnPoints_Number(oaresult,oanswers,point){
    return oaresult.map((element,i)=>oanswers[i]===element).filter(i=>i).map(i=>point).reduce((prev,curr)=>prev+curr,0);
} */
export function flagResult(totalPoints,earnPoints)
{
    return (totalPoints * 50/100)<earnPoints;
}
/* export function oaCheckUserExist({children}){
    const auth = useSelector(state=>state.result.userId)
    return auth? children : <Navigate to={'/'} replace={true}></Navigate>
} */
export async function magetServerData(murl,callback){
    const mdata = await (await axios.get(murl))?.data;
    return callback ? callback(mdata):mdata;
}
export async function mapostServerData(murl,maresult,callback){
    const mdata = await (await axios.post(murl,maresult))?.data;
    return callback ? callback(mdata):mdata;
}