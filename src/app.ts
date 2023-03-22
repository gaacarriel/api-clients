import express from "express";

const app = express();
const use = express.json();

export default app;

app.listen(3000, () => {
    console.log(`App running in http://localhost:3000`);
})