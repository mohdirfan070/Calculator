import React from 'react'
import{ useEffect, useState } from "react";
import './Calci.css'
function Buttons() {

  let [input,setInput]=useState("");

  let handleChange=(e)=>{
      setInput(e.target.value);
  }
  let deleteLast = ()=>{
      let nums = input.split("");
      // console.log(nums);
      nums.pop();
      // console.log(nums);
      nums.join("and");
      // console.log( nums.join("").toString());
      setInput(nums.join("").toString());
      
  }
  const calculate = () => {
    try {
      setInput((eval(input) || "" ) + "");
    } catch (e) {
      setInput("ERROR");
    }
  };

  let handleKey = (e)=>{
    console.log(e.key);
    if(e.key==="Enter"){
      calculate();
    }
    if(e.key==="Delete"){
    setInput("");
    }
  }



  return (
   <>
     

     <div onKeyDown={handleKey} className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <a className='underline text-xl font-bold' href="https://instagram.com/mohd_irfan070/">Mohammed Irfan</a>
            <h1 className="text-5xl font-bold">Calculator</h1>

            <input type="text" value={input} onChange={handleChange} className="textarea h-20 w-72 text-xl textarea-bordered border-4 active:outline-none active:border-none border-base-content mt-4"  />
            
            <div className="number flex flex-col gap-4 w-[250px] m-7">

            {/* Top Row */}
            <div className="first-row flex justify-center gap-4">
                <button onClick={  ()=>{setInput("")} }    className="btn btn-circle btn-outline">
                  <span className="text-xl" >AC</span>
                </button>
                <button onClick={  ()=>{deleteLast()} }    className="btn btn-circle btn-outline">
                  <span className="text-xl" >DE</span>
                </button>
                <button  onClick={  ()=>{setInput(input+"/")} }    className="btn btn-circle btn-outline">
                  <span className="text-xl">/</span>
                </button>
                <button  onClick={  ()=>{setInput(input+"*")} }   className="btn btn-circle btn-outline">
                  <span className="text-xl mb-1  text-2xl">×</span>
                </button>
              </div>

                {/* //first Row */}
              <div className="first-row flex justify-center gap-4">
                <button onClick={  ()=>{setInput(input+"7")} }    value={7} className="btn btn-circle btn-outline">
                  <span className="text-xl" >7</span>
                </button>
                <button onClick={  ()=>{setInput(input+"8")}}      value={8} className="btn btn-circle btn-outline">
                  <span className="text-xl">8</span>
                </button>
                <button onClick={  ()=>{setInput(input+"9")}}    value={9} className="btn btn-circle btn-outline">
                  <span className="text-xl">9</span>
                </button>
                <button  onClick={  ()=>{setInput(input+"-")} }    className="btn btn-circle btn-outline">
                  <span className="text-xl">-</span>
                </button>
              </div>
                {/* //Second Row */}
                <div className="first-row flex justify-center gap-4">
                <button onClick={   ()=>{setInput(input+"4")}}      value={4} className="btn btn-circle btn-outline">
                  <span className="text-xl">4</span>
                </button>
                <button onClick={ ()=>{setInput(input+"5")}}      value={5} className="btn btn-circle btn-outline">
                  <span className="text-xl">5</span>
                </button>
                <button onClick={   ()=>{setInput(input+"6")}}      value={6} className="btn btn-circle btn-outline">
                  <span className="text-xl">6</span>
                </button>
                <button  onClick={  ()=>{setInput(input+"+")} }   className="btn btn-circle btn-outline">
                  <span className="text-xl mb-1  text-2xl">+</span>
                </button>
              </div>
              {/* //THird Row */}
              <div className="first-row flex justify-center gap-4">
                <button onClick={  ()=>{setInput(input+"1")}}    value={1} className="btn btn-circle btn-outline">
                  <span className="text-xl">1</span>
                </button>
                <button onClick={   ()=>{setInput(input+"2")}}      value={2} className="btn btn-circle btn-outline">
                  <span className="text-xl">2</span>
                </button>
                <button onClick={  ()=>{setInput(input+"3")}}      value={3} className="btn btn-circle btn-outline">
                  <span className="text-xl">3</span>
                </button>
                <button  onClick={  ()=>{setInput(input+"0")} }   className="btn btn-circle btn-outline">
                  <span className="text-xl mb-1  text-2xl">0</span>
                </button>
              </div>
              <div className="last-btn flex justify-between px-1 w-full">
              <button  onClick={  ()=>{setInput(input+"00")} }   className="btn btn-circle btn-outline">
                  <span className="text-xl  text-2xl">00</span>
                </button>
                 <button  onClick={calculate}   className="btn bg-base-content text-white hover:bg-base-content  text-3xl border-base-content border-base-300 w-[70%]  mb-1 ">=</button>
              {/* <button  onClick={  ()=>{setInput(input+"+")} }    className="btn hover:bg-base-content hover:text-white text-2xl border-base-content border-base-300 w-[20%]  mb-1 mr-1">+</button> */}
              </div>
             
            </div>
            </div>
        </div>
      </div>
   </>
  )
}

export default Buttons