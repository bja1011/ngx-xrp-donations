(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

  /***/ "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),

  /***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
  /*!**************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "<ngx-xrp-donations account=\"rDKQPqcVf2tmk7uLyZBxT6kRxRTei5idvG\"></ngx-xrp-donations>\n"

    /***/
  }),

  /***/ "./projects/xrp-donations/src/lib/xrp-donations.component.ts":
  /*!*******************************************************************!*\
    !*** ./projects/xrp-donations/src/lib/xrp-donations.component.ts ***!
    \*******************************************************************/
  /*! exports provided: XrpDonationsComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "XrpDonationsComponent", function () {
      return XrpDonationsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _xrp_donations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xrp-donations.service */ "./projects/xrp-donations/src/lib/xrp-donations.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


    var XrpDonationsComponent = /** @class */ (function () {
      function XrpDonationsComponent(xrpDonationsService) {
        var _this = this;
        this.xrpDonationsService = xrpDonationsService;
        this.status = _xrp_donations_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].disconnected;
        xrpDonationsService.connect()
          .subscribe(function (msg) {
            console.log(msg);
            _this.handleSocketResponse(msg);
          });
        xrpDonationsService.openObserver
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
          .subscribe(function (event) {
            _this.status = _xrp_donations_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].connected;
            // xrpDonationsService.watchAccount(this.account);
            xrpDonationsService.getAccount(_this.account);
          });
      }

      XrpDonationsComponent.prototype.ngOnInit = function () {
      };
      XrpDonationsComponent.prototype.handleSocketResponse = function (msg) {
        var accountData = msg.result.account_data;
        if (accountData) {
          this.balance = accountData.Balance / 1000000;
        }
      };
      tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
      ], XrpDonationsComponent.prototype, "account", void 0);
      XrpDonationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'ngx-xrp-donations',
          template: "\n    {{balance ? balance + 'XRP' : '-'}} <br>{{status}}\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_xrp_donations_service__WEBPACK_IMPORTED_MODULE_2__["XrpDonationsService"]])
      ], XrpDonationsComponent);
      return XrpDonationsComponent;
    }());


    /***/
  }),

  /***/ "./projects/xrp-donations/src/lib/xrp-donations.module.ts":
  /*!****************************************************************!*\
    !*** ./projects/xrp-donations/src/lib/xrp-donations.module.ts ***!
    \****************************************************************/
  /*! exports provided: XRPDonationsModule */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "XRPDonationsModule", function () {
      return XRPDonationsModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _xrp_donations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xrp-donations.component */ "./projects/xrp-donations/src/lib/xrp-donations.component.ts");


    var XRPDonationsModule = /** @class */ (function () {
      function XRPDonationsModule() {
      }

      XRPDonationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
          declarations: [_xrp_donations_component__WEBPACK_IMPORTED_MODULE_2__["XrpDonationsComponent"]],
          imports: [],
          exports: [_xrp_donations_component__WEBPACK_IMPORTED_MODULE_2__["XrpDonationsComponent"]]
        })
      ], XRPDonationsModule);
      return XRPDonationsModule;
    }());


    /***/
  }),

  /***/ "./projects/xrp-donations/src/lib/xrp-donations.service.ts":
  /*!*****************************************************************!*\
    !*** ./projects/xrp-donations/src/lib/xrp-donations.service.ts ***!
    \*****************************************************************/
  /*! exports provided: XrpDonationsService, ConnectionStatus */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "XrpDonationsService", function () {
      return XrpDonationsService;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ConnectionStatus", function () {
      return ConnectionStatus;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
    /* harmony import */
    var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm5/webSocket/index.js");


    var rippleServer = 'wss://s2.ripple.com:443';
    var XrpDonationsService = /** @class */ (function () {
      function XrpDonationsService() {
        this.openObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      XrpDonationsService.prototype.connect = function () {
        return this.socket = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__["webSocket"])({
          url: rippleServer,
          openObserver: this.openObserver
        });
      };
      XrpDonationsService.prototype.getAccount = function (account) {
        this.socket.next({
          command: 'account_info',
          account: account,
          strict: true,
          ledger_index: 'validated'
        });
      };
      XrpDonationsService.prototype.watchAccount = function (account) {
        this.socket.next({
          command: 'subscribe',
          accounts: [account],
          streams: [
            'ledger'
          ]
        });
      };
      XrpDonationsService.prototype.ping = function () {
        var command = {
          command: 'ping'
        };
        this.socket.next(command);
      };
      XrpDonationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
          providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
      ], XrpDonationsService);
      return XrpDonationsService;
    }());

    var ConnectionStatus;
    (function (ConnectionStatus) {
      ConnectionStatus["connected"] = "Connected";
      ConnectionStatus["disconnected"] = "Disconnected";
    })(ConnectionStatus || (ConnectionStatus = {}));


    /***/
  }),

  /***/ "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

    /***/
  }),

  /***/ "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


    var AppComponent = /** @class */ (function () {
      function AppComponent() {
      }

      AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-root',
          template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
          styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
      ], AppComponent);
      return AppComponent;
    }());


    /***/
  }),

  /***/ "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
    /* harmony import */
    var _projects_xrp_donations_src_lib_xrp_donations_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/xrp-donations/src/lib/xrp-donations.module */ "./projects/xrp-donations/src/lib/xrp-donations.module.ts");


    var AppModule = /** @class */ (function () {
      function AppModule() {
      }

      AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
          declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
          ],
          imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _projects_xrp_donations_src_lib_xrp_donations_module__WEBPACK_IMPORTED_MODULE_4__["XRPDonationsModule"],
          ],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
      ], AppModule);
      return AppModule;
    }());


    /***/
  }),

  /***/ "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


    /***/
  }),

  /***/ "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
      .catch(function (err) {
        return console.error(err);
      });


    /***/
  }),

  /***/ 0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! /home/adam/projects/x/xrp-donations-demo/src/main.ts */"./src/main.ts");


    /***/
  })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
