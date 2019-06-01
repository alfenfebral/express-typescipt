"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var substract_1 = require("./substract");
var chai = __importStar(require("chai"));
var chaiHttp = require("chai-http");
require("mocha");
chai.use(chaiHttp);
var expect = chai.expect;
describe('Substract Function', function () {
    it('should return 1', function () {
        var result = substract_1.substract(2, 1);
        expect(result).to.eq(1);
    });
});
