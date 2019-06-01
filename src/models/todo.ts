import mongoose from 'mongoose';

export interface ITodo extends mongoose.Document {
  title: string;
  desc: string;
}

export const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true }
});

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);
export default Todo;