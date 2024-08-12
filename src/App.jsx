// import "./App.css";

import { useState } from "react";


function App() {

const [count , setcount ] = useState (0);


  function decreseHandler(){
    setcount(count - 1 );

  }

  function increseHandler(){
  setcount ( count + 1 );
  }

  function resetHandler( ){
    setcount (0);

    }



  return (
   <div   className="w-[100vw] h-[100vh] flex justify-center items-center bg-emerald-400 gap-10  flex-col ">
      <div  className="  font-bold text-2xl text-[#d40303]"> Increment & Decrement </div>

      <div  className=" bg-white flex justify-center gap-12 py-3 rounded-3xl text-[25px] text-[#344151] "> 


          <button onClick={decreseHandler} className = " border-r-2 text-center w-20 text-5xl border-[#bfbfbf] "> - </button>

          <div  className=" font-bold text-5xl gap-10"> {count} </div>

          <button onClick={increseHandler} className = " border-l-2 text-center w-20 text-5xl border-[#bfbfbf] ">  + </button>


      </div>

      <button onClick={resetHandler}  className="text-white bg-[#d43003] px-5 py-2 rounded-xl text-lg"> Reset </button>



   </div>
  );
}

export default App;
