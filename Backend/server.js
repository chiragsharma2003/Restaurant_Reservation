import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Sever Running On Port ${process.env.PORT}`);
});