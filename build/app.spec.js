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
var app_1 = __importDefault(require("./app"));
var chai = __importStar(require("chai"));
var chaiHttp = require("chai-http");
require("mocha");
chai.use(chaiHttp);
var expect = chai.expect;
describe('Home API Request', function () {
    it('should return response on call', function () {
        return chai.request(app_1.default).get('/')
            .then(function (res) {
            expect(res.text).to.eql("Hello World!");
        });
    });
});
