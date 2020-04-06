"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var InputOutput = (function () {
    function InputOutput() {
        this.fave = false;
        this.favoriteclicked = new core_1.EventEmitter();
    }
    InputOutput.prototype.notifyMessage = function () {
        this.favoriteclicked.emit("the favorite " + this.favorite + " was saved");
        this.fave = !this.fave;
    };
    InputOutput.prototype.isSelected = function (fave) {
        if (!fave || !this.fave) {
            return false;
        }
        if (fave) {
            return true;
        }
    };
    return InputOutput;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InputOutput.prototype, "review", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputOutput.prototype, "favorite", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputOutput.prototype, "favoriteclicked", void 0);
InputOutput = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'inputoutput',
        templateUrl: 'input.output.html',
    })
], InputOutput);
exports.InputOutput = InputOutput;
//# sourceMappingURL=input.component.js.map