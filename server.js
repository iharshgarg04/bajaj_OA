const express = require("express");
const cors = require("cors");
const PORT = 4000;
const  app = express();
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/bfhl',async(req,res)=>{
    try{
        const {data}=req.body;
        const even= data.filter((num)=>typeof parseInt(num)==='number' && parseInt(num)%2===0);
        const odd= data.filter((num)=>typeof parseInt(num)==='number' && parseInt(num)%2===1);
        const alpha= data.filter((num)=>typeof num==='string' && isNaN(parseInt(num)));
        const upper=alpha.map((al)=>al.toUpperCase());
        const user_id = "harsh1713";
        const email = "harsh1713.be21@chitkara.edu.in";
        const roll_no = "2110991713";
        res.status(200).json({
            is_success:true,
            user_id : user_id,
            roll_number: roll_no,
            odd_numbers : even ,
            even_numbers: odd,
            alphabets : upper
        })
    }catch(error){
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`server is successfully running on port ${PORT}`);
})