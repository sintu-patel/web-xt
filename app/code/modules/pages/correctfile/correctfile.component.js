System.register(['@angular/core', '../../app.service', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1, router_1;
    var CorrectFile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CorrectFile = class CorrectFile {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.fileData = [];
                    this.loadFineList();
                }
                setData(data) {
                    this.fileData = data.fileData;
                }
                loadFineList() {
                    this.dataService.getFineData().subscribe(data => {
                        this.setData(data);
                    });
                }
                updateData(event) {
                    let $input = event.target;
                    let $inputValue = $input.value;
                    let $colName = $input.name;
                    let $rowNo = $input.getAttribute('data-rowno');
                    $rowNo = parseInt($rowNo, 10);
                    switch ($colName) {
                        case "name":
                            this.fileData[$rowNo].name = $inputValue;
                            break;
                        case "fine":
                            this.fileData[$rowNo].fine = $inputValue;
                            break;
                        case "currency":
                            this.fileData[$rowNo].currency = $inputValue;
                            break;
                        case "collectedfine":
                            this.fileData[$rowNo].collectedfine = $inputValue;
                            break;
                        default:
                            break;
                    }
                }
                deleteRow(event) {
                    let $button = event.target;
                    let $rowNo = $button.getAttribute('data-rowno');
                    $rowNo = parseInt($rowNo, 10);
                    this.fileData[$rowNo].isDeleted = 'deleted';
                }
                saveData(event) {
                    const fileData = this.fileData;
                    this.dataService.saveFileData(fileData).subscribe(data => {
                        alert('file-saved');
                    });
                }
            };
            CorrectFile = __decorate([
                // to get route params
                core_1.Component({
                    templateUrl: './app/code/modules/pages/correctfile/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, app_service_1.DataService])
            ], CorrectFile);
            exports_1("CorrectFile", CorrectFile);
        }
    }
});
//# sourceMappingURL=correctfile.component.js.map