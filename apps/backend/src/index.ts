import express from "express"
import cors from "cors";

const app = express();
app.use(cors())

app.post("/paymentresponse", (req, res) => {


})

app.listen(3003);
