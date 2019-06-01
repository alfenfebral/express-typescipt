import { TodoRepository } from './../repository/todo.repository';

export class TodoService {
  constructor(
    private todoRepository: TodoRepository,
  ) {}

  public async getAll() {
    return await this.todoRepository.findAll();
  }

  public async getOne(id: string) {
    return await this.todoRepository.findOne(id);
  }

  public async create(val: object) {
    return await this.todoRepository.create(val);
  }

  public async update(id: string, val: object) {
    return await this.todoRepository.update(id, val);
  }

  public async delete(id: string) {
    return await this.todoRepository.delete(id);
  }
}