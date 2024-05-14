"use client"
import Image from "next/image";
import { useState } from "react";


export default function page() {

    const [userinput, setUserinput] = useState();
    const [promptEnter, setPromptEnter] = useState();
    const [enhancePrompt, setEnhancePrompt] = useState('');
    const [resultImage, setResultImage] = useState(null);


    const handleInput = (e)=>{
        e.preventDefault()
        setUserinput(e.target.value);
    }

    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        return result;
    }
    // query({"inputs": "Astronaut riding a horse"}).then((response) => {
    //     // Use image
    // });

    const sendPrompt = () => {
        // setPromptEnter(userinput)
        query({"inputs": enhancePrompt}).then((response) => {
            const img = URL.createObjectURL(response);
            setResultImage(img)
            });
        
        
    }

    const getmodel = () => {
        const { GoogleGenerativeAI } = require("@google/generative-ai");
    
        const genAI = new GoogleGenerativeAI("AIzaSyC8ByGKxXp3yjn9y6q4EXloVOqJ99KgfYk");
    
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
        async function run() {
            const prompt = `You are AI Image Prompt Engineer, give me only the enhanced prompt in 30-40 words, Prompt: ${userinput}`;
    
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            console.log(text)
            setEnhancePrompt(text)
            sendPrompt()
            
        }
    
        run();
    }

    return(
        <>
        <div className="flex">
        <div className="flex flex-col items-center w-fit gap-2 p-4">
        <div className="flex flex-row justify-between items-center gap-2">
                <input onChange={(e)=>handleInput(e)} type="text" placeholder="Enter your Prompt Here!!" className="w-[50vw] bg-gray-200 bg-opacity-20 rounded-lg border-sm border text-white px-4 py-1 outline-none"/>
                <button onClick={()=>getmodel()} type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center">Generate</button>
            </div>
            <div  className="h-[75vh] w-[60vw] border bordre-white rounded-2xl bg-gray-300 bg-opacity-20 py-4">
                <div id="promptbox" className="mx-4 text-white font-mono">
                    <span>Prompt: </span>{promptEnter}
                </div>
                {
                    resultImage && <Image className="w-50 h-50 ml-4" src={resultImage} height={450} width={450} alt="image is not available"/>
                }
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