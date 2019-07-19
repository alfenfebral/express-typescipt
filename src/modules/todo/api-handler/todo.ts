import { ValidationError } from '../../../utils/errors/index';
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

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const result = await this.todoService.getAll();

    return res.status(200).send({
      result,
    });
  }

  public async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.todoService.getOne(req.params.id);

      return res.status(200).send(result);
    } catch (error) {
      if(error.error instanceof ValidationError) {
        return res.status(error.value.code).send({
          message: error.value.message
        });
      }
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const result = await this.todoService.create({
      title: req.body.title,
      desc: req.body.desc,
    });

    return res.status(200).send(result);
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      await this.todoService.update(req.params.id, {
        title: req.body.title,
        desc: req.body.desc,
      });
  
      const result = await this.todoService.getOne(req.params.id);
  
      return res.status(200).send(result);
    } catch (error) {
      if(error.error instanceof ValidationError) {
        return res.status(error.value.code).send({
          message: error.value.message
        });
      }
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.todoService.delete(req.params.id);

      return res.status(200).send({
        _id: req.params.id,
      });
    } catch (error) {
      if(error.error instanceof ValidationError) {
        return res.status(error.value.code).send({
          message: error.value.message
        });
      }
    }
  }
}