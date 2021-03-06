System.register(['@angular/core', '../../app.service', '../../../config/app.labels', '../../../config/app.config'], function(exports_1, context_1) {
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
    var core_1, app_service_1, app_labels_1, app_config_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (app_labels_1_1) {
                app_labels_1 = app_labels_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            Login = class Login {
                constructor(dataService) {
                    this.dataService = dataService;
                    this.token = null;
                    this.modelData = null;
                    this.isModelOpen = false;
                    this.loggedIn = sessionStorage['token'] && sessionStorage['token'] === '9910712381';
                }
                closeModel() {
                    this.modelData = null;
                    this.isModelOpen = false;
                }
                login() {
                    if (!this.token) {
                        this.invalidData('Empty input');
                        return;
                    }
                    else if (this.token !== app_config_1.apiConfig.validToken) {
                        this.invalidData('Invalid Token');
                        return;
                    }
                    const token = this.token;
                    this.setSession(token);
                }
                invalidData(headingText) {
                    let modelData = {
                        showCloseButton: true,
                        heading: headingText,
                        description: 'You can not login without valid token'
                    };
                    this.openModel(modelData);
                }
                openModel(data) {
                    this.modelData = data;
                    this.isModelOpen = true;
                }
                makeloggedIn() {
                    let modelData = {
                        showRedirectLink: true,
                        redirectUrl: app_labels_1.labelConfig.navigation[0].url,
                        redirectLabel: app_labels_1.labelConfig.navigation[0].label,
                        heading: 'You are logged in as ' + sessionStorage['token'],
                        description: 'Click home to continue'
                    };
                    this.openModel(modelData);
                }
                setSession(token) {
                    if (typeof (Storage) !== "undefined") {
                        sessionStorage['token'] = token;
                        this.makeloggedIn();
                    }
                }
                loggedOut() {
                    let modelData = {
                        showRedirectLink: true,
                        redirectUrl: app_labels_1.labelConfig.navigation[0].url,
                        redirectLabel: app_labels_1.labelConfig.navigation[0].label,
                        heading: 'You are logged out.',
                        description: 'Click home to continue'
                    };
                    this.openModel(modelData);
                }
                logout() {
                    if (typeof (Storage) !== "undefined" && sessionStorage['token']) {
                        sessionStorage['token'] = null;
                        this.loggedOut();
                    }
                }
            };
            Login = __decorate([
                core_1.Component({
                    templateUrl: './app/code/modules/pages/login/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [app_service_1.DataService])
            ], Login);
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.component.js.map