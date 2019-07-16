import { TodoRepository } from './todo.repository';
import * as chai from 'chai';
import 'mocha';
import TodoRepositoryMock from './todo.repository.mock';

const expect = chai.expect;

describe('TodoRepository', () => {
  const todoRepository:TodoRepository = TodoRepositoryMock;

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
    expect(result).to.be.a('object');
  })

  it('todoRepository:update should return object', async () => {
    const result = await todoRepository.update('5cf23720fd7ce61904d43eed', {
      title: 'lorem',
      desc: 'ipsum'
    });
    expect(result).to.be.a('object');
  })

  it('todoRepository:delete should return message', async() => {
    const result = await todoRepository.delete('5cf23720fd7ce61904d43eed');
    expect(result).to.be.a('object');
  })
})