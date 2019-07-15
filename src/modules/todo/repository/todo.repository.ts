import Todo from '../../../models/todo';
import { mongo } from 'mongoose';

export class TodoRepository {
  public findAll() {
    return Todo.collection.find().toArray();
  }

  public findOne(id: string) {
    return Todo.collection.findOne({ _id: new mongo.ObjectID(id) });
  }

  public create(val: object) {
    return Todo.collection.insertOne(val);
  }

  public update(id: string, val: object) {
    return Todo.collection.updateOne({ _id: new mongo.ObjectID(id) }, { $set: val });
  }

  public delete(id: string) {
    return Todo.collection.deleteOne({ _id: new mongo.ObjectID(id) });
  }
}
