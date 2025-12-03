import { model, Schema, Types } from 'mongoose';

const schema = new Schema(
  {
    title: String,
    body: String,
    author: { type: String, default: 'tarikceylan' },
    hidden: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const BlogModel = model('Blog', schema);
