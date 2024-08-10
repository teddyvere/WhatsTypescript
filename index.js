"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
require("./style.css");
// Get the form element
var form = document.querySelector('#defineform');
// Event listener for form submission
form.onsubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var searchInput, searchWord;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault(); // Prevent form submission from reloading the page
                searchInput = document.querySelector('#searchinput');
                searchWord = searchInput.value;
                // Call the dictionary function with the search word
                return [4 /*yield*/, fetchDictionary(searchWord)];
            case 1:
                // Call the dictionary function with the search word
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// Function to fetch dictionary data for a given word
// Function to fetch dictionary data for a given word
var fetchDictionary = function (word) { return __awaiter(void 0, void 0, void 0, function () {
    var response, dictionaryResponse, list_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(word), {
                        method: 'GET',
                        headers: {},
                    })];
            case 1:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                dictionaryResponse = _a.sent();
                list_1 = document.querySelector('#definition-list');
                // Iterate over the definitions and create new list items dynamically
                dictionaryResponse.meanings.forEach(function (meaning) {
                    meaning.definitions.forEach(function (definition) {
                        var listItem = document.createElement('li');
                        listItem.textContent = definition.definition;
                        list_1.appendChild(listItem);
                    });
                });
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                // Log any errors that occurred during the request
                console.error(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Check if the request was successful
if (response.ok) {
    // Parse the response as JSON
    var dictionaryResponse = await response.json();
    // Log the dictionary response
    console.log(dictionaryResponse);
}
try { }
catch (error) {
    // Log any errors that occurred during the request
    console.error(error);
}
;
// Check if the module is being run directly
if (import.meta.url === globalThis.location.href) {
    // Add your main code here
    console.log('This module is being run directly');
}
else {
    // Add your code to be executed when imported as a dependency
    console.log('This module is being imported as a dependency');
}
