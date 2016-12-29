System.register(['angular2/core', '../../services/users.service', '@angular/forms', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, users_service_1, forms_1, http_1;
    var SignPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //import {Control,Validators} form 'angular2/common';
            SignPageComponent = (function () {
                function SignPageComponent(_userpageService, http) {
                    this._userpageService = _userpageService;
                    this.http = http;
                }
                SignPageComponent.prototype.ngOnInit = function () {
                    this.formUp = new forms_1.FormGroup({
                        usernameUp: new FormControl(null, forms_1.Validators.required),
                        passwordUp: new FormControl(null, forms_1.Validators.required),
                        email: new FormControl(null, forms_1.Validators.required)
                    });
                    this.formIn = new forms_1.FormGroup({
                        usernameUp: new FormControl(null, forms_1.Validators.required),
                        passwordUp: new FormControl(null, forms_1.Validators.required)
                    });
                };
                // formUp = new ControlGroup({
                //     usernameUp: new Control('',Validators.required),
                //     passwordUp: new Control('',Validators.required),
                //     email: new Control('',Validators.required)
                // });
                //SignIn
                SignPageComponent.prototype.signIn = function () {
                    //console.log(form.value);
                };
                //SignUp
                SignPageComponent.prototype.signUp = function () {
                    console.log(this.formUp.value);
                };
                SignPageComponent = __decorate([
                    core_1.Component({
                        selector: 'signpage',
                        templateUrl: 'app/forms/signpage/signpage.component.html',
                        providers: [users_service_1.UsersService],
                        styleUrls: ['assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, http_1.Http])
                ], SignPageComponent);
                return SignPageComponent;
            }());
            exports_1("SignPageComponent", SignPageComponent);
        }
    }
});
//# sourceMappingURL=signpage.component.js.map