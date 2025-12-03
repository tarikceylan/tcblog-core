import mongoose from 'mongoose';

export const connectDatabase = async () => {
  const { DB_URI } = process.env;

  if (!DB_URI) {
    throw new Error('No DB_URI');
  }

  try {
    const { connection } = await mongoose.connect(DB_URI, { maxPoolSize: 5 });

    console.log(`Connected to DB: ${connection.db?.databaseName}`);
  } catch (error) {
    console.error(`Something went wrong on connect. ${error}`);
  }
};
