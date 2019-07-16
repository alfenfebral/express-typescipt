import { TodoRepository } from './todo.repository';
import { mock, instance, when, deepEqual } from 'ts-mockito';
import { mongo } from 'mongoose';

const todoRepositoryMock:TodoRepository = mock(TodoRepository);
when(todoRepositoryMock.findAll()).thenResolve([
  {
    _id: '5cf23720fd7ce61904d43eed',
    title: 'lorem',
    desc: 'ipsum',
  }
]);
when(todoRepositoryMock.findOne('5cf23720fd7ce61904d43eed')).thenResolve({
  _id: '5cf23720fd7ce61904d43eed',
  title: 'lorem',
  desc: 'ipsum',
});
when(todoRepositoryMock.create(deepEqual({
  title: 'lorem',
  desc: 'ipsum',
}))).thenResolve({
  insertedCount: 1,
  ops: [
    { title: 'lorem', desc: 'ipsum', _id: '5cf23720fd7ce61904d43eed' }
  ],
  insertedId: new mongo.ObjectID('5cf23720fd7ce61904d43eed'),
  connection: '',
  result: { ok: 1, n: 1 },
});
when(todoRepositoryMock.update('5cf23720fd7ce61904d43eed', deepEqual({
  title: 'lorem',
  desc: 'ipsum',
}))).thenResolve({
  result: { ok: 1, n: 1, nModified: 1 },
  connection: '',
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 1,
  upsertedId: { _id: new mongo.ObjectID('5cf23720fd7ce61904d43eed') },
});
when(todoRepositoryMock.delete('5cf23720fd7ce61904d43eed')).thenResolve({
  result: {
    ok: 1,
    n: 1,
  },
  connection: '',
  deletedCount: 1,
});
const TodoRepositoryMock:TodoRepository = instance(todoRepositoryMock);

export default TodoRepositoryMock;