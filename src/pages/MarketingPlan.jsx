import React, { useEffect, useState } from 'react'
import "./quiz.css";

import { useFetchQuestion } from '../hooks/MarketingPlanQuestion';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/MarketingPlanQuestion';
import {PushAnswer, updateResult} from '../hooks/setResult';
import {useSelector,useDispatch} from 'react-redux';

const MarketingPlan = ({onChecked}) => {

    const[check, setChecked] = useState(undefined)
    const [{ isLoading,apiData,serverError}] = useFetchQuestion();
    

    const mpquestions = useSelector(state=>state.questions.queue[state.mpquestions.trace])
    const result = useSelector(state=>state.result.result)
    const state = useSelector(state=>state)
    const {queue,trace} = useSelector(state=>state.questions)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(state)
    })
    function onPrev(){
        //console.log("On Previous Click")
        if(trace>0){
            dispatch(MovePrevQuestion())
        }
        
    }
    function onNext(){
        //console.log("On nect Click")
        if(trace<queue.length){
            dispatch(MoveNextQuestion())
            dispatch(PushAnswer(check))
        }
    
    }

    function onChecked(check){
        console.log(check);
        setChecked(check)
    }
    if(result.length && result.length>=queue.length){
        return <Navigate to={'/result'} replace="true"></Navigate>
    }
    
   
    function onSelect(i){
         onChecked(i);
         setChecked(i);
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown error"}</h3>
    return(
        <div className='container'>
            <div className='container1'>
            <h2 className='title1 text-light'> Tell US About Your Bussines Plan</h2>
            </div>
            <div className='radiobtn'>
            <h2 className='text-light'>{ mpquestions?.question }</h2>

            <ul key={mpquestions?.id}>
                {
                    mpquestions?.options.map((q,i)=>(
                        <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name= "options"
                            id={`q${i}-option`}
                            onChange={()=>onSelect(i)}
                        />
                        <label className='text' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace == i ? 'check' : '']}`}></div>
                        </li>
                    ))
                }
            </ul>
            <div className='grid'>
                {trace > 0 ? <button className='btnpre' onClick={onPrev}>Previous</button>:<div></div> }
                <button className='btnnext' onClick={onNext}>Next</button>
            </div>
        </div>
           </div> 
        
    )
}

export default MarketingPlan   ;