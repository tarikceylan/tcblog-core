import type { Types } from 'mongoose';
import { BlogModel } from '../models/';
import type { BlogType } from '../types';

export const BlogService = {
  async createBlog(blog: Partial<BlogType>) {
    return BlogModel.create(blog);
  },

  async listAllBlogs() {
    return BlogModel.find();
  },

  async listActiveBlogs() {
    return BlogModel.find({ deleted: { $ne: true } });
  },

  async getBlogById(id: string) {
    return BlogModel.findById(id);
  },

  async updateBlog(id: string, body: Partial<BlogType>) {
    const { deleted, ...safeBody } = body;
    return BlogModel.findByIdAndUpdate(id, safeBody, { new: true });
  },

  async deleteBlog(id: string) {
    return BlogModel.findByIdAndUpdate(
      id,
      {
        deleted: true,
      },
      { new: true }
    );
  },
};
