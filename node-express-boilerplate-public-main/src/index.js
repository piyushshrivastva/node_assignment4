const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req,res)=>{
    if (isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.json({ 
            "status": "failure",
            "message" : `Please enter valid Numbers`
        })
    }
    // console.log(req.body)
    let sum= Number(req.body.num1)+Number(req.body.num2);
    // let sum=(req.body.num1)+(req.body.num2)
    if (sum >(1000000) || Number(req.body.num1)>1000000 || Number(req.body.num2)>1000000){
        res.json({ 
            "status": "error",
            "message" : `Overflow`
        })
    }
    else if(sum <(-1000000) || Number(req.body.num1)<-1000000 || Number(req.body.num2)<-1000000){
        res.json({ 
            "status": "error",
            "message" : `Underflow`
        })
    }
    else if (-1000000< sum <1000000){
    res.json({ 
        "status": "success",
        "message" : `the sum of given two numbers`,
        "sum":sum
    })
    }
})

app.post("/sub", (req,res)=>{
    if (isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.json({ 
            "status": "failure",
            "message" : `Please enter valid Numbers`
        })
    }
    // console.log(req.body)
    let difference= Number(req.body.num1)-Number(req.body.num2);
    if (difference>(1000000) || Number(req.body.num1)>1000000 || Number(req.body.num2)>1000000 ){
        res.json({ 
            "status": "error",
            "message" : `Overflow`
        })
    }
    else if(difference<(-1000000) || Number(req.body.num1)<-1000000 || Number(req.body.num2)<-1000000){
        res.json({ 
            "status": "error",
            "message" : `Underflow`
        })
    }
    else if (-1000000< {difference} <1000000){
    res.json({ 
        "status": "success",
        "message" : `the difference of given two numbers `,
        "difference":difference
    })
    }
})

app.post("/multiply", (req,res)=>{
    if (isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.json({ 
            "status": "failure",
            "message" : `Please enter valid Numbers`
        })
    }
    // console.log(req.body)
    let product= Number(req.body.num1)*Number(req.body.num2);
    if (product>(1000000) || Number(req.body.num1)>1000000 || Number(req.body.num2)>1000000){
        res.json({ 
            "status": "error",
            "message" : `Overflow`
        })
    }
    else if(product<(-1000000) || Number(req.body.num1)<-1000000 || Number(req.body.num2)<-1000000){
        res.json({ 
            "status": "error",
            "message" : `Underflow`
        })
    }
    else if (-1000000< {product}<1000000){
    res.json({ 
        "status": "success",
        "message" : `the product of given two numbers `,
        "result":product
    })
    }
})

app.post("/divide", (req,res)=>{
    if (isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.json({ 
            "status": "failure",
            "message" : `Please enter valid Numbers`
        })
    }
    else if((req.body.num2)==0){
        res.json({ 
            "status": "error",
            "message" : "Cannot divide by zero"
        })
    }
    // console.log(req.body)
    let division= Number(req.body.num1)/Number(req.body.num2);
    if (division >(1000000) || Number(req.body.num1)>1000000 || Number(req.body.num2)>1000000){
        res.json({ 
            "status": "error",
            "message" : `Overflow`
        })
    }
    else if(division <(-1000000) || Number(req.body.num1)<-1000000 || Number(req.body.num2)<-1000000){
        res.json({ 
            "status": "error",
            "message" : `Underflow`
        })
    }
    else if (-1000000< division <1000000){
    res.json({ 
        "status": "success",
        "message" : `the division of given two numbers `,
        "result": division
    })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;