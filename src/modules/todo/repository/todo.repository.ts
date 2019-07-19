import Todo from '../../../models/todo';
import { mongo } from 'mongoose';

export class TodoRepository {
  
  /**
   *
   *
   * @returns {Promise}
   * @memberof TodoRepository
   */
  public findAll() {
    return Todo.find().exec();
  }

  /**
   *
   *
   * @param {string} id
   * @returns {Promise}
   * @memberof TodoRepository
   */
  public findOne(id: string) {
    if(!mongo.ObjectID.isValid(id)) {
      return false;
    }
  
    return Todo.findOne({ _id: new mongo.ObjectID(id) }).exec();
  }

  /**
   *
   *
   * @param {object} val
   * @returns {Promise}
   * @memberof TodoRepository
   */
  public create(val: object) {
    return Todo.create(val);
  }

  /**
   *
   *
   * @param {string} id
   * @param {object} val
   * @returns {Promise}
   * @memberof TodoRepository
   */
  public update(id: string, val: object) {
    if(!mongo.ObjectID.isValid(id)) {
      return false;
    }

    return Todo.updateOne({ _id: new mongo.ObjectID(id) }, { $set: val }).exec();
  }

  /**
   *
   *
   * @param {string} id
   * @returns {Promise}
   * @memberof TodoRepository
   */
  public delete(id: string) {
    if(!mongo.ObjectID.isValid(id)) {
      return false;
    }

    return Todo.deleteOne({ _id: new mongo.ObjectID(id) }).exec();
  }
}
