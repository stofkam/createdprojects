import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
import {db} from './prisma/db';


dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/getuser', async (req: Request, res: Response) => {
  try {
    const users = await db.orm.public.User.all()
    if(users.length > 0){
      return res.status(200).json(users)
    }
    else {
      const users = await db.orm.public.User.createAll([
        {
          username: 'stoff',
          email: 'stoff@example.com',
          password: '123456',
        },
        {
          username: 'user',
          email: 'user@example.com',
          password: '123456',
        },
        {
          username: 'admin',
          email: 'admin@example.com',
          password: '123456',
        },
        {
          username: 'test',
          email: 'test@example.com',
          password: '123456',
        },
      ])
      return res.status(200).json(users)
    }
  } catch (error) {
    return res.status(500).json({error: 'Internal Server Error'})
  }
 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

