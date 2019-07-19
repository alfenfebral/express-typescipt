import { ValidationError } from '../../../utils/errors/index';
import { TodoRepository } from './../repository/todo.repository';

export class TodoService {
  constructor(
    private todoRepository: TodoRepository,
  ) {}

  public async getAll() {
    return await this.todoRepository.findAll();
  }

  public async getOne(id: string) {
    const exist = await this.todoRepository.findOne(id);
    if(!exist) {
      throw {
        value: {
          code: 404,
          message: 'Not Found'
        },
        error: new ValidationError('Not Found')
      }
    }
  
    return exist;
  }

  public async create(val: object) {
    return await this.todoRepository.create(val);
  }

  public async update(id: string, val: object) {
    const exist = await this.todoRepository.findOne(id);
    if(!exist) {
      throw {
        value: {
          code: 404,
          message: 'Not Found'
        },
        error: new ValidationError('Not Found')
      }
    }

    return await this.todoRepository.update(id, val);
  }

  public async delete(id: string) {
    const exist = await this.todoRepository.findOne(id);
    if(!exist) {
      throw {
        value: {
          code: 404,
          message: 'Not Found'
        },
        error: new ValidationError('Not Found')
      }
    }

    return await this.todoRepository.delete(id);
  }
}