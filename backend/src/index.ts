import express from "express"
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());

// POSTMAN
app.get("/get", async (req, res) => {
    res.send("Hii This is my first express endpoint")
});

app.listen(3000);