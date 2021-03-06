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
    var DetailPage;
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
            DetailPage = class DetailPage {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    if (this.id >= 0) {
                        this.loadUser();
                    }
                }
                setData(data) {
                    let $this = this;
                    data.data.filter(function (item) {
                        if ($this.id === item._id) {
                            $this.list = item;
                            $this.heading = data.heading;
                            $this.question = $this.list.issue;
                            $this.answer = $this.list.resolution;
                            console.log($this.list);
                        }
                    });
                }
                ngOnInit() {
                    this.id = this.route.snapshot.queryParams["p"];
                    this.loadUser();
                }
                loadUser() {
                    this.dataService.getData().subscribe(data => {
                        this.setData(data);
                    });
                }
            };
            DetailPage = __decorate([
                // to get route params
                core_1.Component({
                    templateUrl: './app/code/modules/pages/detailpage/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, app_service_1.DataService])
            ], DetailPage);
            exports_1("DetailPage", DetailPage);
        }
    }
});
//# sourceMappingURL=detailpage.component.js.map