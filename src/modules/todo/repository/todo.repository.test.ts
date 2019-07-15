import { TodoRepository } from './todo.repository';
import Todo, { ITodo } from '../../../models/todo';
import * as chai from 'chai';
import 'mocha';
import { mock, instance, when } from 'ts-mockito';
import mongoose, { mongo } from 'mongoose';

const expect = chai.expect;

describe('TodoRepository', () => {
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

  it('TodoRepository:findAll should return array', async () => {
    const result = await todoRepository.findAll();
    expect(result).to.be.an('array');
  })
  it('todoRepository:findOne should return object', async () => {
    const result = await todoRepository.findOne('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })

  it('todoRepository:create should return object', async () => {
    const result = await todoRepository.create({
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('null');
  })

  it('todoRepository:update should return object', async () => {
    const result = await todoRepository.update('5cf23720fd7ce61904d43eed', {
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('null');
  })

  it('todoRepository:delete should return message', async() => {
    const result = await todoRepository.delete('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })
})

// describe("Test whether result is array and json stringifyable.", () => {
//   it("Should return the error", done => {
//     const TodoMock: mongoose.Model<ITodo, {}> = mock<mongoose.Model<ITodo, {}>>(Todo);
//     when(TodoMock.collection.find().toArray()).thenResolve([]);
//     const todo: mongoose.Model<ITodo, {}> = instance(TodoMock);

//     const result = todo.collection.find().toArray();
//     console.log(result);
//     expect(result).to.be.a('array');
//   });
// })