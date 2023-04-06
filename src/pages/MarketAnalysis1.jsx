import React from "react";
export default function MarketAnalysis1(){
    function onPrev(){
        console.log("On Previous Click")
        } 
    function onNext(){
            console.log("On Next Click")
            } 
    function onSelect(){
        console.log('radio button change')
    }
    return (
        <div className='container'>
        <div className='container1'>
        <h2 className='title1 text-light'> Tell US About Your Bussines Plan</h2>
        </div>
        <h2 className='text-light'>Sample Question </h2>

        <ul>
            <li>
                <input 
                type="radio"
                value={true}
                name="options"
                id='q1-option'
                onChange={onSelect()}
                 />
            </li>
        </ul>
        <div className='grid'>
        <button className='btnpre' onClick={onPrev}>Previous</button>
        <button className='btnnext' onClick={onNext}>Next</button>
            </div>
</div> 
    )
}