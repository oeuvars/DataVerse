import { blogs, db } from '../config/schema';
import { eq } from 'drizzle-orm';
import express from 'express';
import jwt from 'jsonwebtoken';

const secretKey = "ztamHqj7MAOe8p8n";
let time = new Date();

interface User {
  id: number;
  email: string;
  password: string;
}

const users: User[] = [
  { id: 1, email: 'mohanraj@dataverseindia.com', password: 'mohanraj' },
  { id: 2, email: 'aditya@dataverseindia.com', password: 'aditya' },
  { id: 3, email: 'anurag@dataverseindia.com', password: 'anurag' },
];


export const login = (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
    expiresIn: '24h',
  });

  return res.status(200).send({
    msg: 'Logged In',
    token
  });
};

export const upload_blog = async (req: express.Request, res: express.Response) => {
  const { main_heading, sub_heading_1, sub_heading_2, sub_heading_3, sub_heading_4, sub_heading_5, sub_heading_6, sub_heading_7, sub_heading_8 } = req.body;
  const { main_paragraph, para_1, para_2, para_3, para_4, para_5, para_6, para_7, para_8 } = req.body;
  const { image } = req.body

  const isUploaded = await db.insert(blogs).values({ email: req.body.mail, main_heading: main_heading, sub_heading_1:sub_heading_1, sub_heading_2: sub_heading_2, sub_heading_3: sub_heading_3, sub_heading_4: sub_heading_4,sub_heading_5: sub_heading_5, sub_heading_6: sub_heading_6, sub_heading_7: sub_heading_7, sub_heading_8: sub_heading_8, main_paragraph: main_paragraph, para_1: para_1, para_2: para_2, para_3: para_3, para_4: para_4, para_5: para_5, para_6: para_6, para_7: para_7, para_8: para_8, image_data: image });
  if (isUploaded) {
    return res.status(200).send({
      msg: 'Uploaded',
    });
  } else {
    return res.status(409).send({
      msg: 'Failed to upload',
    });
  }
}

export const show_blog = async (req: express.Request, res: express.Response) => {
  try {
    const main_plate = await db.select().from(blogs);

    if (main_plate && main_plate.length > 0) {
      const simplifiedBlogs = main_plate.map(blog => ({
        main_heading: blog.main_heading,
        main_paragraph: blog.main_paragraph,
        id: blog.id,
      }));

      console.log(simplifiedBlogs);

      return res.status(200).send({
        msg: 'All Blogs',
        blogs: simplifiedBlogs,
      });
    } else {
      return res.status(404).send({
        msg: 'No Blogs found',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      msg: 'Internal Server Error',
    });
  }
}

export const blog = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const blog = await db.select().from(blogs).where(eq(blogs.id, Number(id)))
    if (!blog) {
      res.status(404).json({ error: 'Blog not found' });
    } else {
      return res.status(200).send({
        msg: 'All Blogs',
        blog
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
