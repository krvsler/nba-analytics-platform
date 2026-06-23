import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// reads .env file and loads its variables into process.env
dotenv.config();

// creates server instance
const app = express();
const PORT = process.env.PORT || 3000;

// enables CORS
app.use(cors());
app.use(express.json());

// first route
app.get('/', (req, res) => {
    res.json({ message: 'NBA Analytics API is running' });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// starts the server and looks for incoming requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});