"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var add_1 = require("./add");
var chai = __importStar(require("chai"));
var chaiHttp = require("chai-http");
require("mocha");
chai.use(chaiHttp);
var expect = chai.expect;
describe('Add Function', function () {
    it('should return 3', function () {
        var result = add_1.add(1, 2);
        expect(result).to.eq(3);
    });
});
