import express from "express";
import cors from "cors";

const app = express();
app.use(cors());                
app.use(express.json());

app.post('/deploy', (req, res) => {
    const repoUrl = req.body.repoUrl;
});

app.listen(3000, () => {
    console.log('Upload Server is running on port 3000');
});