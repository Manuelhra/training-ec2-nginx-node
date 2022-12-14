import express, { Application, Request, Response } from "express";
import cors from 'cors';

const dummyData = [
    {
        name: 'Manuel',
        age: 23
    },
];

const app: Application = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send(dummyData);
});

app.listen(4000, () => console.log('Run on port 4000...'));