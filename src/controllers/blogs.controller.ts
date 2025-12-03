import type { Request, Response } from 'express';
import { BlogService } from '../services/blogs.service';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, body, tags } = req.body;
    const newBlog = await BlogService.createBlog({ title, body, tags });
    return res.status(201).json({ message: `Blog Created`, newBlog });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: `No blog found with that id` });
    }

    const foundBlog = await BlogService.getBlogById(id);

    if (!foundBlog || foundBlog.deleted) {
      return res.status(404).json({ message: `Blog is not found` });
    }
    return res.status(200).json({ message: `Blog Found`, foundBlog });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};

export const listBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogService.listActiveBlogs();
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};

export const listAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogService.listAllBlogs();
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const fields = req.body;

    if (!id) {
      return res.status(400).json({ message: `No blog found with that id` });
    }

    if (fields.deleted) {
      return res.status(400).json({ message: `Use delete option instead` });
    }

    const updatedBlog = await BlogService.updateBlog(id, fields);
    return res
      .status(200)
      .json({ message: `Blog updated successfully`, updatedBlog });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: `No blog found with that id` });
    }
    const deletedBlog = await BlogService.deleteBlog(id);

    return res
      .status(200)
      .json({ message: `Blog marked as deleted`, deletedBlog });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};
