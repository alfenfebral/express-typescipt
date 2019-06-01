"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb://127.0.0.1:27017/ex-type';
exports.connect = function () {
    mongoose_1.default.set('useCreateIndex', true);
    mongoose_1.default.connect(uri, {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log('Succesfully Connected!');
        }
    });
};
