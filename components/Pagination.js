var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import '../styles/Pagination.css';
const Pagination = ({ searchTerm, pagination, getPage, }) => (pagination && (React.createElement("div", { className: "Pagination" },
    React.createElement("div", { className: "paginationInformation" }, `Page ${pagination.page + 1} of ${Math.ceil(pagination.total_count / 25)}`),
    (pagination.page > 0) && (React.createElement("button", { type: "button", className: "styledInput", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
            getPage({
                q: searchTerm,
                offset: (pagination.page - 1) * pagination.count,
                newPage: pagination.page - 1,
            });
        }) }, "Prev")),
    (pagination.page + 1 < Math.ceil(pagination.total_count / 25)) && (React.createElement("button", { type: "button", className: "styledInput", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
            getPage({
                q: searchTerm,
                offset: (pagination.page + 1) * pagination.count,
                newPage: pagination.page + 1,
            });
        }) }, "Next")))));
export default Pagination;
