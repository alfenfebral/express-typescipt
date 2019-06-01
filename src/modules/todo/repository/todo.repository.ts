import Todo from '../../../models/todo';
import { mongo } from 'mongoose';

export class TodoRepository {
  public async findAll() {
    return Todo.collection.find().toArray();
  }

  public async findOne(id: string) {
    return Todo.collection.findOne({ _id: new mongo.ObjectID(id) });
  }

  public async create(val: object) {
    return Todo.collection.insertOne(val);
  }

  public async update(id: string, val: object) {
    return Todo.collection.updateOne({ _id: new mongo.ObjectID(id) }, { $set: val });
  }

  public async delete(id: string) {
    return Todo.collection.deleteOne({ _id: new mongo.ObjectID(id) });
  }
}
