import express from "express";
import { blog, login, show_blog, upload_blog } from '../controllers/userController';

export const router = express.Router();
router.post('/login', login)
router.post('/upload', upload_blog)
router.get('/blogs', show_blog)
router.get('/blog/:id', blog)
