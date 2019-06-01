import { TodoService } from '../service/todo.service';
import { NextFunction, Request, Response, Router } from 'express'


export class TodoApiHandler {
  constructor(
    private todoService: TodoService,
  ) {}

  public init(router: Router,) {
    router.get('/todo', (req: Request, res: Response, next: NextFunction) => this.getAll(req, res, next))
    router.get('/todo/:id', (req: Request, res: Response, next: NextFunction) => this.getOne(req, res, next))
    router.post('/todo', (req: Request, res: Response, next: NextFunction) => this.create(req, res, next))
    router.put('/todo/:id', (req: Request, res: Response, next: NextFunction) => this.update(req, res, next))
    router.delete('/todo/:id', (req: Request, res: Response, next: NextFunction) => this.delete(req, res, next))
  }

  private async getAll(req: Request, res: Response, next: NextFunction) {
    const result = await this.todoService.getAll();

    return res.status(200).send({
      result,
    });
  }

  private async getOne(req: Request, res: Response, next: NextFunction) {
    const result = await this.todoService.getOne(req.params.id);

    return res.status(200).send(result);
  }

  private async create(req: Request, res: Response, next: NextFunction) {
    await this.todoService.create({
      title: req.body.title,
      desc: req.body.desc,
    });

    return res.status(200).send({
      message: 'Todo item created',
    });
  }

  private async update(req: Request, res: Response, next: NextFunction) {
    await this.todoService.update(req.params.id, {
      title: req.body.title,
      desc: req.body.desc,
    });

    const result = await this.todoService.getOne(req.params.id);

    return res.status(200).send(result);
  }

  private async delete(req: Request, res: Response, next: NextFunction) {
    await this.todoService.delete(req.params.id);

    return res.status(200).send({
      message: `Todo item with id ${req.params.id} deleted`,
    });
  }
}