import { TodoRepository } from './../repository/todo.repository';
import { TodoService } from './todo.service';
import * as chai from 'chai';
import 'mocha';
import TodoRepositoryMock from '../repository/todo.repository.mock';

const expect = chai.expect;

describe('TodoService', () => {
  const todoRepository:TodoRepository = TodoRepositoryMock

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
    expect(result).to.be.a('object');
  })

  it('TodoService:update should return object', async () => {
    const result = await todoService.update('5cf23720fd7ce61904d43eed', {
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('object');
  })

  it('TodoService:delete should return message', async () => {
    const result = await todoService.delete('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })
})

