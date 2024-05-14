"use client"
import { useState } from "react";



export default function page() {

    const [userinput, setUserinput] = useState();
    const [promptEnter, setPromptEnter] = useState();
    const [promptResult, setPromptResult] = useState();

    const handleInput = (e)=>{
        e.preventDefault()
        setUserinput(e.target.value);
    }

    const sendPrompt = () => {
        setPromptEnter(userinput)
        getmodel()
        
    }

    const getmodel = () => {
        const { GoogleGenerativeAI } = require("@google/generative-ai");
    
        const genAI = new GoogleGenerativeAI("AIzaSyC8ByGKxXp3yjn9y6q4EXloVOqJ99KgfYk");
    
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
        async function run() {
            const prompt = `in 100-200 word, ${userinput}`;
            console.log(userinput)
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            setPromptResult(text);
        }
    
        run();
    }

    return(
        <>
        <div className="flex">
        <div className="flex flex-col items-center w-fit gap-2 p-4">
            <div className="flex flex-row justify-between items-center gap-2">
                <input onChange={(e)=>handleInput(e)} type="text" placeholder="Enter your Prompt Here!!" className="w-[50vw] bg-gray-200 bg-opacity-20 rounded-lg border-sm border text-white px-4 py-1 outline-none"/>
                <button onClick={()=>sendPrompt()} type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center">send</button>
            </div>
            <div  className="h-[75vh] w-[60vw] border bordre-white rounded-2xl bg-gray-300 bg-opacity-20 py-4">
                <div id="promptbox" className="mx-4 text-white font-mono">
                    <span>Prompt: </span>{promptEnter}
                </div>
                <div className="text-white font-md mx-4 font-mono">
                    {promptResult}
                </div>
            </div>
            
        </div>
        <div className="flex flex-col p-4">
            <h1 className="text-white">IPFS info:</h1>
            <div className="h-[45vh] w-[35vw] border bordre-white rounded-sm bg-green-300 bg-opacity-20">

            </div>
            <div className="self-end mt-40 mr-4 rounded-lg bg-green-800 hover:bg-green-900 cursor-pointer px-4 py-2 text-white text-lg">
                Deploy
            </div>
        </div>
        </div>
        </>
    )
}