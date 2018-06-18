webpackJsonp([2],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sim__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




//sim


var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, platform, geolocation, device, sim) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.device = device;
        this.sim = sim;
        this.markers = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('geolocations/');
        platform.ready().then(function () {
            // this.initMap();  
            _this.getSimData();
            // var temp;
            // //sim info
            // this.sim.getSimInfo().then(
            // (info) => //console.log('Sim info: ', info),
            //  this.temp =JSON.stringify(info),
            // (err) => alert('Unable to get sim info: ')
            // );
            //     this.sim.hasReadPermission().then(
            //   (info) => console.log('Has permission: ', info)
            // );
            // this.sim.requestReadPermission().then(
            //   () => console.log('Permission granted'),
            //   () => console.log('Permission denied')
            // );
            // });
            // this.ref.on('value', resp => 
            // {
            //   this.deleteMarkers();
            //   snapshotToArray(resp).forEach(data => 
            //   {
            //     if(data.uuid !== this.device.uuid) {
            //       let image = 'assets/imgs/location2.png';
            //       let updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
            //       this.addMarker(updatelocation,image);
            //       this.setMapOnAll(this.map);
            //     } else {
            //       let image = 'assets/imgs/location2.png';
            //       let updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
            //       this.addMarker(updatelocation,image);
            //       this.setMapOnAll(this.map);
            //     }
            //   });
            // });
            // this.sim.hasReadPermission().then(
            //   (info) => console.log('Has permission: ', info)
            // );
            // this.sim.requestReadPermission().then(
            //   () => console.log('Permission granted'),
            //   () => console.log('Permission denied')
            // );
        });
    }
    AdminPage.prototype.getSimData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var simPermission, simData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.sim.requestReadPermission()];
                    case 1:
                        simPermission = _a.sent();
                        if (!(simPermission == "OK")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sim.getSimInfo()];
                    case 2:
                        simData = _a.sent();
                        this.simInfo = simData;
                        this.cards = simData.cards;
                        //console.log(simData);
                        this.temp = JSON.stringify(simData);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.temp = 'Error';
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //functions
    AdminPage.prototype.gotToAdmin2 = function () {
        this.ref.on("value", function (snapshot) {
            console.log(snapshot.val());
        }, function (error) {
            console.log("Error: " + error.code);
        });
        this.initMap();
        //console.log('called');
        // this.navCtrl.push(AdminPage)
    };
    AdminPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            }, function (err) {
                console.log(err);
            });
            ;
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.deleteMarkers();
            _this.updateGeolocation(_this.device.uuid, data.coords.latitude, data.coords.longitude);
            var updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            var image = 'assets/imgs/location2.png';
            _this.addMarker(updatelocation, image);
            _this.setMapOnAll(_this.map);
            // console.log(this.device.uuid);
        });
    };
    AdminPage.prototype.addMarker = function (location, image) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
    };
    AdminPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    AdminPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    AdminPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    //from update firebase
    AdminPage.prototype.updateGeolocation = function (uuid, lat, lng) {
        // console.log(localStorage.getItem('mykey'));
        var userId = '9575353073';
        var pass = 1234;
        if (localStorage.getItem('mykey')) {
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('geolocations/' + userId).set({
                uuid: uuid,
                latitude: lat,
                longitude: lng,
                userId: userId,
                pass: pass,
                time: new Date().getTime()
            });
        }
        else {
            //console.log('not found');
            var newData = this.ref.push();
            newData.set({
                uuid: uuid,
                latitude: lat,
                longitude: lng,
                userId: userId,
                pass: pass,
                time: new Date().getTime()
            });
            localStorage.setItem('mykey', userId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AdminPage.prototype, "mapElement", void 0);
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/pages/admin/admin.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Admin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n <ion-list >\n    <ion-item>\n      <ion-label floating>Mobile No.</ion-label>\n      <ion-input type="number"></ion-input>\n    </ion-item>\n    <br /><br />\n    <!-- <button ion-button block>Track</button> -->\n    <button ion-button (click) = "gotToAdmin2()">Go To Admin</button>\n    {{temp}}\n  </ion-list> \n\n  \n    <!-- map -->\n  <div #map id="map" style="height: 100%;"></div>\n \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title><small>Copyright 2018</small></ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n\n'/*ion-inline-end:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sim__["a" /* Sim */]])
    ], AdminPage);
    return AdminPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_admin_admin__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexPage = /** @class */ (function () {
    function IndexPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IndexPage.prototype.gotToAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_admin_admin__["a" /* AdminPage */]);
    };
    IndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index',template:/*ion-inline-start:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/pages/index/index.html"*/'<!--\n  Generated template for the IndexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>index</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button (click) = "gotToAdmin()">Go To Admin</button>\n</ion-content>\n'/*ion-inline-end:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/pages/index/index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		434,
		1
	],
	"../pages/index/index.module": [
		435,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(300);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_index_index__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sim__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__["a" /* AdminPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/index/index.module#IndexPageModule', name: 'IndexPage', segment: 'index', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__["a" /* AdminPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_sim__["a" /* Sim */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_index_index__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//firebase

//initializing firebase
var config = {
    apiKey: 'AIzaSyCcc2Hxk2AGI9fLF6y7QC1yxF7UqTjy9gM',
    authDomain: "geotracker-a4855.firebaseapp.com",
    databaseURL: "https://geotracker-a4855.firebaseio.com",
    projectId: "geotracker-a4855",
    storageBucket: "geotracker-a4855.appspot.com",
    messagingSenderId: "766037115636"
};
// import { HomePage } from '../pages/home/home';
// @Component({
//template:/*ion-inline-start:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/app/app.html"*/
// })
// export class MyApp 
// {
//   rootPage:any = HomePage;

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_index_index__["a" /* IndexPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sim__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//


//sim


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, geolocation, device, sim) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.device = device;
        this.sim = sim;
        this.markers = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('geolocations/');
        platform.ready().then(function () {
            _this.initMap();
            //sim info
            _this.sim.getSimInfo().then(function (info) { return console.log('Sim info: ', info); }, function (err) { return alert('Unable to get sim info: '); });
        });
        //
        this.ref.on('value', function (resp) {
            _this.deleteMarkers();
            snapshotToArray(resp).forEach(function (data) {
                if (data.uuid !== _this.device.uuid) {
                    var image = 'assets/imgs/location2.png';
                    var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                    _this.addMarker(updatelocation, image);
                    _this.setMapOnAll(_this.map);
                }
                else {
                    var image = 'assets/imgs/location2.png';
                    var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                    _this.addMarker(updatelocation, image);
                    _this.setMapOnAll(_this.map);
                }
            });
        });
        //console data
        this.ref.on("value", function (snapshot) {
            console.log(snapshot.val());
        }, function (error) {
            console.log("Error: " + error.code);
        });
        // this.sim.hasReadPermission().then(
        //   (info) => console.log('Has permission: ', info)
        // );
        // this.sim.requestReadPermission().then(
        //   () => console.log('Permission granted'),
        //   () => console.log('Permission denied')
        // );
    }
    HomePage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            });
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.deleteMarkers();
            _this.updateGeolocation(_this.device.uuid, data.coords.latitude, data.coords.longitude);
            var updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            var image = 'assets/imgs/location2.png';
            _this.addMarker(updatelocation, image);
            _this.setMapOnAll(_this.map);
            // console.log(this.device.uuid);
        });
    };
    HomePage.prototype.addMarker = function (location, image) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
    };
    HomePage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    HomePage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    HomePage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    //from update firebase
    HomePage.prototype.updateGeolocation = function (uuid, lat, lng) {
        // console.log(localStorage.getItem('mykey'));
        var userId = '9575353073';
        var pass = 1234;
        if (localStorage.getItem('mykey')) {
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('geolocations/' + userId).set({
                uuid: uuid,
                latitude: lat,
                longitude: lng,
                userId: userId,
                pass: pass,
                time: new Date().getTime()
            });
        }
        else {
            //console.log('not found');
            var newData = this.ref.push();
            newData.set({
                uuid: uuid,
                latitude: lat,
                longitude: lng,
                userId: userId,
                pass: pass,
                time: new Date().getTime()
            });
            localStorage.setItem('mykey', userId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     SB | Track Location\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <div #map id="map"></div>\n  {{s}}\n</ion-content>\n'/*ion-inline-end:"/home/creates11/SANJAY/Ionic/map/ionic-geolocation-tracking/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sim__["a" /* Sim */]])
    ], HomePage);
    return HomePage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=home.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.js.map