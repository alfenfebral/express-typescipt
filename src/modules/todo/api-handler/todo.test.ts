import { TodoService } from './../service/todo.service';
import { TodoApiHandler } from './todo';
import * as chai from 'chai';
import 'mocha';
import TodoRepositoryMock from '../repository/todo.repository.mock';
import sinon from 'sinon';
import { response } from 'express';

const expect = chai.expect;

describe('TodoAPIHandler', () => {
  it('init should done', async (done) => {
    const router:any = {
      get: sinon.stub().callsFake((url, fn) => {
        let request:any = {};
        let response:any = {};
        const next:any = {};
        if(url === '/todo/:id') {
          request = {
            body: {},
            params: {
              id: '5cf23720fd7ce61904d43eed'
            }
          };
        }

        response = {
          status: sinon.stub().returnsThis(),
          send: sinon.stub().callsFake((val: any) => {
            return val;
          }),
        };

        return fn(request, response, next);
      }),
      post: sinon.stub().callsFake((url, fn) => {
        const request:any = {
          body: {},
          params: {
            id: '5cf23720fd7ce61904d43eed'
          }
        };
    
        const response:any = {
          status: sinon.stub().returnsThis(),
          send: sinon.stub().callsFake((val: any) => {
            return val;
          }),
        };
    
        const next:any = {};

        return fn(request, response, next);
      }),
      put: sinon.stub().callsFake((url, fn) => {
        const request:any = {
          params: {
            id: '5cf23720fd7ce61904d43eed'
          },
          body: {
            title: 'lorem',
            desc: 'ipsum',
          },
        };
    
        const response:any = {
          status: sinon.stub().returnsThis(),
          send: sinon.stub().callsFake((val: any) => {
            return val;
          }),
        };
    
        const next:any = {};
        return fn(request, response, next);
      }),
      delete: sinon.stub().callsFake((url, fn) => {
        const request:any = {
          params: {
            id: '5cf23720fd7ce61904d43eed'
          },
          body: {
            title: 'lorem',
            desc: 'ipsum',
          },
        };
    
        const response:any = {
          status: sinon.stub().returnsThis(),
          send: sinon.stub().callsFake((val: any) => {
            return val;
          }),
        };
    
        const next:any = {};
        return fn(request, response, next);
      }),
    }
   
    const todoApiHandler:TodoApiHandler = new TodoApiHandler(new TodoService(TodoRepositoryMock))

    todoApiHandler.init(router);
    done();
  });
  it('getAll should return object', async () => {
    const request:any = {
      body: {}
    };

    const response:any = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().callsFake((val: any) => {
        return val;
      }),
    };

    const next:any = {};

    const todoApiHandler:TodoApiHandler = new TodoApiHandler(new TodoService(TodoRepositoryMock));
    const data:any = await todoApiHandler.getAll(request, response, next);

    expect(data).to.be.a('object');
    expect(data.result).to.be.a('array');
  });
  it('getOne should return object', async () => {
    const request:any = {
      body: {},
      params: {
        id: '5cf23720fd7ce61904d43eed'
      }
    };

    const response:any = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().callsFake((val: any) => {
        return val;
      }),
    };

    const next:any = {};

    const todoApiHandler:TodoApiHandler = new TodoApiHandler(new TodoService(TodoRepositoryMock));
    const data:any = await todoApiHandler.getOne(request, response, next);

    expect(data).to.be.a('object');
  });
  it('create should return object', async () => {
    const request:any = {
      body: {
        title: 'lorem',
        desc: 'ipsum',
      },
    };

    const response:any = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().callsFake((val: any) => {
        return val;
      }),
    };

    const next:any = {};

    const todoApiHandler:TodoApiHandler = new TodoApiHandler(new TodoService(TodoRepositoryMock));
    const data:any = await todoApiHandler.create(request, response, next);

    expect(data).to.be.a('object');
  });
  it('update should return object', async () => {
    const request:any = {
      params: {
        id: '5cf23720fd7ce61904d43eed'
      },
      body: {
        title: 'lorem',
        desc: 'ipsum',
      },
    };

    const response:any = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().callsFake((val: any) => {
        return val;
      }),
    };

    const next:any = {};

    const todoApiHandler:TodoApiHandler = new TodoApiHandler(new TodoService(TodoRepositoryMock));
    const data:any = await todoApiHandler.update(request, response, next);

    expect(data).to.be.a('object');
  });
  it('delete should return object', async () => {
    const request:any = {
      params: {
        id: '5cf23720fd7ce61904d43eed'
      },
    };

    const response:any = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().callsFake((val: any) => {
        return val;
      }),
    };
  
    const next:any = {};

    const todoApiHandler:TodoApiHandler = new TodoApiHandler(new TodoService(TodoRepositoryMock));
    const data:any = await todoApiHandler.delete(request, response, next);

    expect(data).to.be.a('object');
  });
})

