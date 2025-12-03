import { Router } from 'express';
import {
  createBlog,
  listBlogs,
  deleteBlog,
  updateBlog,
  getBlogById,
  listAllBlogs,
} from '../controllers';

export const BlogRoutes = Router();

BlogRoutes.route('/').get(listBlogs).post(createBlog);
BlogRoutes.route('/all').get(listAllBlogs);
BlogRoutes.route('/:id').get(getBlogById).delete(deleteBlog).put(updateBlog);
