"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datesToDue = void 0;
const moment_1 = __importDefault(require("moment"));
const datesToDue = (date) => {
    const eventDate = (0, moment_1.default)(date);
    const today = (0, moment_1.default)();
    return eventDate.diff(today, 'days');
};
exports.datesToDue = datesToDue;
