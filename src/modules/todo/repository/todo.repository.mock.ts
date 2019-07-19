import { ITodo } from './../../../models/todo';
import { mongo } from 'mongoose';
import sinon from 'sinon';
import { TodoRepository } from './todo.repository';

const TodoRepositoryMock:TodoRepository = new TodoRepository();
sinon.stub(TodoRepositoryMock, 'findAll').callsFake(async () => {
  return [
    {
      _id: '5cf23720fd7ce61904d43eed',
      title: 'lorem',
      desc: 'ipsum',
    }
  ] as ITodo[];
})
sinon.stub(TodoRepositoryMock, 'findOne').callsFake(async () => {
  return {
    _id: '5cf23720fd7ce61904d43eed',
    title: 'lorem',
    desc: 'ipsum',
  } as ITodo;
})

sinon.stub(TodoRepositoryMock, 'create').callsFake(async () => {
  return {
    _id: '5cf23720fd7ce61904d43eed',
  } as ITodo;
})

sinon.stub(TodoRepositoryMock, 'update').callsFake(async () => {
  return {
    result: { ok: 1, n: 1, nModified: 1 },
    connection: '',
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 1,
    upsertedId: { _id: new mongo.ObjectID('5cf23720fd7ce61904d43eed') },
  }
})

sinon.stub(TodoRepositoryMock, 'delete').callsFake(async () => {
  return Promise.resolve({
    ok: 1,
    n: 1,
  });
})

export default TodoRepositoryMock;