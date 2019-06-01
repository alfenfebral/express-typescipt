import { TodoService } from './modules/todo/service/todo.service';
import { TodoApiHandler } from './modules/todo/api-handler/todo';
import express from 'express';
import * as MongoDB from './config/mongo';
import { TodoRepository } from './modules/todo/repository/todo.repository';
import cookieParser from 'cookie-parser';

export class Server {
  private router: express.Application;

  constructor() {
    this.router = express();
  }

  public create() {
    this.router.use(express.json());
    this.router.use(express.urlencoded({ extended: false }));
    this.router.use(cookieParser());


    // Todo
    const todoApiHandler = new TodoApiHandler(new TodoService(new TodoRepository()));
    todoApiHandler.init(this.router);

    this.router.listen(3000, () => {
      console.log('Listening on port 3000!');
    });
  }
}

MongoDB.connect();
const server = new Server();
server.create();