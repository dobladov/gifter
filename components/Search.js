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
const Search = ({ searchTerm, setSearchTerm, getPage, }) => (React.createElement("form", { onSubmit: (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        getPage({ q: searchTerm });
    }) },
    React.createElement("input", { type: "text", className: "styledInput", required: true, list: "searchs", placeholder: "Search for Gifs", onChange: (e) => {
            const { value } = e.target;
            setSearchTerm(value);
        } }),
    React.createElement("datalist", { id: "searchs" },
        React.createElement("option", { value: "Dog" }),
        React.createElement("option", { value: "Puppie" }),
        React.createElement("option", { value: "Cat" }),
        React.createElement("option", { value: "Kitten" }),
        React.createElement("option", { value: "Cartoon" }),
        React.createElement("option", { value: "Reaction" }))));
export default Search;
