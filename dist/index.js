"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesFromExpression = exports.createRelationExpression = exports.sliceRelation = exports.FilterQueryBuilder = exports.buildFilter = void 0;
const FilterQueryBuilder_1 = require("./lib/FilterQueryBuilder");
const utils_1 = require("./lib/utils");
const ExpressionBuilder_1 = require("./lib/ExpressionBuilder");
const LogicalIterator_1 = require("./lib/LogicalIterator");
function buildFilter(modelClass, trx, options) {
    return new exports.FilterQueryBuilder(modelClass, trx, options);
}
exports.buildFilter = buildFilter;
exports.FilterQueryBuilder = FilterQueryBuilder_1.default;
exports.sliceRelation = utils_1.sliceRelation;
exports.createRelationExpression = ExpressionBuilder_1.createRelationExpression;
exports.getPropertiesFromExpression = LogicalIterator_1.getPropertiesFromExpression;
