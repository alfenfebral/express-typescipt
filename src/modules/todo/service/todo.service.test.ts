import { TodoRepository } from './../repository/todo.repository';
import { TodoService } from './todo.service';
import * as chai from 'chai';
import 'mocha';
import TodoRepositoryMock from '../repository/todo.repository.mock';
import sinon from 'sinon';

const expect = chai.expect;

describe('TodoService', () => {
  it('TodoService:getAll should return array', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    const result = await todoService.getAll();
    expect(result).to.be.an('array');
  })

  it('TodoService:getOne should return object', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    const result = await todoService.getOne('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })

  it('TodoService:getOne should return error (not found)', async () => {
    const todoRepository:TodoRepository = new TodoRepository();
    sinon.stub(todoRepository, 'findOne').callsFake(async () => {
      return null;
    })

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    try {
      await todoService.getOne('5cf23720fd7ce61904d43eed');
    } catch (e) {
      expect(e.value.code).to.be.eq(404);
      expect(e.value.message).to.be.eq('Not Found');
    }
  })

  it('TodoService:create should return object', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    const result = await todoService.create({
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('object');
  })

  it('TodoService:update should return object', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    const result = await todoService.update('5cf23720fd7ce61904d43eed', {
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('object');
  })

  it('TodoService:update should return error (not found)', async () => {
    const todoRepository:TodoRepository = new TodoRepository();
    sinon.stub(todoRepository, 'findOne').callsFake(async () => {
      return null;
    })

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    try {
      await todoService.update('5cf23720fd7ce61904d43eed', {
        title: 'lorem',
        desc: 'ipsum'
      });
    } catch (e) {
      expect(e.value.code).to.be.eq(404);
      expect(e.value.message).to.be.eq('Not Found');
    }
  })

  it('TodoService:delete should return object', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;    

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    const result = await todoService.delete('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })

  it('TodoService:delete should return error (not found)', async () => {
    const todoRepository:TodoRepository = new TodoRepository();
    sinon.stub(todoRepository, 'findOne').callsFake(async () => {
      return null;
    })

    const todoService: TodoService = new TodoService(
      todoRepository,
    );

    try {
      await todoService.delete('5cf23720fd7ce61904d43eed');
    } catch (e) {
      expect(e.value.code).to.be.eq(404);
      expect(e.value.message).to.be.eq('Not Found');
    }
  })
})

