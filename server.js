const express = require("express");
const cors = require("cors");
const PORT = 4000;
const  app = express();

app.post("/bfhl",async(req,res)=>{
    try{
        const [data] = req.body;
        const datafetch = data.split(',');
        const even = datafetch.filter((num)=>num%2===0 && typeof(num)==='number');
        const odd_numbers = datafetch.filter((num)=>num%2!==0 && typeof(num)==='number');
        const alphabet = datafetch.filter((num)=>num%2===0 && typeof(num)==='string');
        const user_id = "harsh1713";
        const email = "harsh1713.be21@chitkara.edu.in";
        const roll_no = "2110991713";
        res.status(200).json({
            is_success:true,
            user_id : user_id,
            roll_number: roll_no,
            odd_numbers : even ,
            even_numbers: odd_numbers,
            alphabets : alphabet
        })
    }catch(error){
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`server is successfully running on port ${PORT}`);
})