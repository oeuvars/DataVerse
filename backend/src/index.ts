import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes/userRoutes';
const app = express();

const PORT = process.env.PORT || 5000

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
