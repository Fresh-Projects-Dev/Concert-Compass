import express from 'express';
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Welcome to Concert Compass");
});


app.listen(PORT, () => {
    console.log(`Server has started on: http://localhost:${PORT}/`)
});