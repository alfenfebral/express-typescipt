import { TodoRepository } from './../repository/todo.repository';
import { TodoService } from './todo.service';
import * as chai from 'chai';
import 'mocha';
import { mock, instance, when } from 'ts-mockito';
import { mongo } from 'mongoose';

const expect = chai.expect;

describe('TodoService', () => {
  const TodoRepositoryMock:TodoRepository = mock(TodoRepository);
  when(TodoRepositoryMock.findAll()).thenResolve([]);
  when(TodoRepositoryMock.findOne('5cf23720fd7ce61904d43eed')).thenResolve({});
  when(TodoRepositoryMock.create({
    title: 'lorem',
    desc: 'ipsum',
  })).thenResolve({
    insertedCount: 1,
    ops: [],
    insertedId: new mongo.ObjectID('5cf23720fd7ce61904d43eed'),
    connection: '',
    result: { ok: 1, n: 1 },
  });
  when(TodoRepositoryMock.update('5cf23720fd7ce61904d43eed', {
    title: 'lorem',
    desc: 'ipsum',
  })).thenResolve({
    result: { ok: 1, n: 1, nModified: 1 },
    connection: '',
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 1,
    upsertedId: { _id: new mongo.ObjectID('5cf23720fd7ce61904d43eed') },
  });
  when(TodoRepositoryMock.delete('5cf23720fd7ce61904d43eed')).thenResolve({
    result: {
      ok: 1,
      n: 1,
    },
    connection: '',
    deletedCount: 1,
  });
  const todoRepository:TodoRepository = instance(TodoRepositoryMock);

  const todoService: TodoService = new TodoService(
    todoRepository,
  );

  it('TodoService:getAll should return array', async () => {
    const result = await todoService.getAll();
    expect(result).to.be.an('array');
  })

  it('TodoService:getOne should return object', async () => {
    const result = await todoService.getOne('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })

  it('TodoService:create should return object', async () => {
    const result = await todoService.create({
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('null');
  })

  it('TodoService:update should return object', async () => {
    const result = await todoService.update('5cf23720fd7ce61904d43eed', {
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('null');
  })

  it('TodoService:delete should return message', async () => {
    const result = await todoService.delete('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })
})

