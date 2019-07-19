import { TodoRepository } from './todo.repository';
import * as chai from 'chai';
import 'mocha';
import TodoRepositoryMock from './todo.repository.mock';
import sinon from 'sinon';

const expect = chai.expect;

describe('TodoRepository', () => {

  it('TodoRepository:findAll should return array', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;
    const result = await todoRepository.findAll();
    expect(result).to.be.an('array');
  })

  it('todoRepository:findOne should return object', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;
    const result = await todoRepository.findOne('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })

  it('todoRepository:findOne should return false', async() => {
    const todoRepository:TodoRepository = new TodoRepository();
  
    const result = await todoRepository.findOne('5cf23720fd7ce61904d43eed----');
    expect(result).to.be.eq(false);
  })

  it('todoRepository:create should return object', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;
    const result = await todoRepository.create({
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('object');
  })

  it('todoRepository:update should return object', async () => {
    const todoRepository:TodoRepository = TodoRepositoryMock;
    const result = await todoRepository.update('5cf23720fd7ce61904d43eed', {
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('object');
  })

  it('todoRepository:update should return false', async() => {
    const todoRepository:TodoRepository = new TodoRepository();
  
    const result = await todoRepository.update('5cf23720fd7ce61904d43eed----',{
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.eq(false);
  })

  it('todoRepository:delete should return object', async() => {
    const todoRepository:TodoRepository = TodoRepositoryMock;
    const result = await todoRepository.delete('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })

  it('todoRepository:delete should return false', async() => {
    const todoRepository:TodoRepository = new TodoRepository();
  
    const result = await todoRepository.delete('5cf23720fd7ce61904d43eed----');
    expect(result).to.be.eq(false);
  })
})