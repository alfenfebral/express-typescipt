"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var todo_service_1 = require("./modules/todo/service/todo.service");
var todo_1 = require("./modules/todo/api-handler/todo");
var express_1 = __importDefault(require("express"));
var MongoDB = __importStar(require("./config/mongo"));
var todo_repository_1 = require("./modules/todo/repository/todo.repository");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var Server = /** @class */ (function () {
    function Server() {
        this.router = express_1.default();
    }
    Server.prototype.create = function () {
        this.router.use(express_1.default.json());
        this.router.use(express_1.default.urlencoded({ extended: false }));
        this.router.use(cookie_parser_1.default());
        // Todo
        var todoApiHandler = new todo_1.TodoApiHandler(new todo_service_1.TodoService(new todo_repository_1.TodoRepository()));
        todoApiHandler.init(this.router);
        this.router.listen(3000, function () {
            console.log('Listening on port 3000!');
        });
    };
    return Server;
}());
exports.Server = Server;
MongoDB.connect();
var server = new Server();
server.create();
