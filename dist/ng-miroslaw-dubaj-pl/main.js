"use strict";
(self["webpackChunkng_miroslaw_dubaj_pl"] = self["webpackChunkng_miroslaw_dubaj_pl"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts/contacts.component */ 3630);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/en-GB */ 7881);
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/uk */ 1221);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/de */ 8855);
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/pl */ 1499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _assets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets.service */ 4605);
/* harmony import */ var _svg_icons_registry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg-icons-registry.service */ 4022);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ 7243);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 9975);





















function AppComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("companyName", card_r11.companyName)("companyLogoClass", card_r11.companyLogoClass)("jobTitle", card_r11.jobTitle)("date", card_r11.date)("projects", card_r11.projects)("link", card_r11.link);
} }
function AppComponent_mat_list_item_59_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r14 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_mat_list_item_59_ng_container_7_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r12.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r12.levels);
} }
function AppComponent_mat_list_item_64_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r17 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_mat_list_item_64_ng_container_7_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r15.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r15.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r15.levels);
} }
function AppComponent_mat_list_item_69_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r20 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_mat_list_item_69_ng_container_7_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r18.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r18.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r18.levels);
} }
function AppComponent_mat_list_item_74_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r23 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_mat_list_item_74_ng_container_7_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r21.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r21.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r21.levels);
} }
function AppComponent_mat_list_item_81_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r26 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AppComponent_mat_list_item_81_ng_container_10_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r24 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r24.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r24.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](8, 5, skill_r24.date, "shortDate", "", ctx_r6.translate.currentLang));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r24.levels);
} }
function AppComponent_mat_list_item_86_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r29 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_mat_list_item_86_ng_container_7_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r27.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r27.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r27.levels);
} }
function AppComponent_mat_list_item_91_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r32 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_mat_list_item_91_ng_container_7_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r30.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r30.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r30.levels);
} }
function AppComponent_mat_list_item_96_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const level_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r35 === 1 ? "star" : "star_border");
} }
function AppComponent_mat_list_item_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_mat_list_item_96_ng_container_7_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", skill_r33.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](skill_r33.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", skill_r33.levels);
} }
function AppComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_div_99_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const lang_r36 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r37.toggleCurrentLang(lang_r36.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const lang_r36 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", lang_r36.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx_r10.currentLang === lang_r36.code ? "warn" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", lang_r36.icon, " ");
} }
class AppComponent {
    constructor(_bottomSheet, translate, assetsService, svgRegistry) {
        this._bottomSheet = _bottomSheet;
        this.translate = translate;
        this.assetsService = assetsService;
        this.svgRegistry = svgRegistry;
        this.currentLang = 'en';
        this.cards = [];
        this.skills = {};
        this.qualifications = {};
        translate.use(this.currentLang);
        (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_1__["default"], 'en');
        (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_2__["default"], 'uk');
        (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_4__["default"], 'pl');
        (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3__["default"], 'de');
    }
    ngOnInit() {
        this.assetsService.getCards().subscribe(data => {
            this.cards = data;
        });
        this.assetsService.getSkills().subscribe(data => {
            this.skills = data;
        });
        this.assetsService.getQualifications().subscribe(data => {
            this.qualifications = data;
        });
    }
    openBottomSheet() {
        this._bottomSheet.open(_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_0__.ContactsComponent);
    }
    toggleCurrentLang(lang) {
        this.currentLang = lang;
        this.translate.use(this.currentLang);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_assets_service__WEBPACK_IMPORTED_MODULE_5__.AssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_svg_icons_registry_service__WEBPACK_IMPORTED_MODULE_6__.SvgIconsRegistryService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 100, vars: 57, consts: [["autosize", "", "hasBackdrop", ""], ["mode", "side", 1, "aboutme-sidenav"], ["drawer", ""], [1, "header"], [1, "card", "mat-elevation-z6"], ["mat-card-avatar", "", 1, "card__header-image"], ["mat-card-image", "", "src", "../assets/bg.jpg", "alt", "My office"], [1, "card__code"], ["align", "end"], [1, "social-icons"], ["href", "https://stackoverflow.com/users/9135951/miros%c5%82aw", "target", "_blank"], ["mat-icon-button", ""], ["svgIcon", "stackoverflow"], ["href", "https://github.com/miroslaw-dubaj", "target", "_blank"], ["svgIcon", "github"], ["href", "https://www.linkedin.com/in/miroslaw-dubaj-30393999/", "target", "_blank"], ["svgIcon", "linkedin"], ["href", "https://www.facebook.com/miroslaw.dubaj/", "target", "_blank"], ["svgIcon", "facebook"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-align-tabs", "center"], [3, "label"], [4, "ngFor", "ngForOf"], ["mat-subheader", ""], [1, "languages"], [3, "companyName", "companyLogoClass", "jobTitle", "date", "projects", "link"], ["matListIcon", "", 3, "svgIcon"], ["mat-line", ""], [3, "svgIcon"], ["mat-mini-fab", "", "aria-label", "Change language", 3, "color", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Currently, new Software Developer at PGS Software S.A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Ex Software Development Specialist at Primetals Technologies working on in-house product involving usage of technologies such as Angular 8, Material Angular along with other must know techs i.a. SCSS, Git, NPM, Webpack, Docker, Rancher... Previously working with other technologies such as React.js (with Typescript), Redux, Office UI Fabric, Vue.js, Vuex, Symfony, Twig, Axios among many others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Owner of Centero.pl, a specialized online store for military and law enforcement personel as well as outdoor and shooting sports enthusiasts. Additionally providing training services in the field of practical/defensive shooting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Master of Arts in the field of Tourism and Recreation. Bachelor of Arts in Hospitality Management. Certified sports shooting, practital and dynamic shooting, combat shooting instructor. Self-taught web developer, graphic, photographer and filmmaker. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Vice-Chairman of the board in guns collectors association \"Podkarpackie Stowarzyszenie Taktyczno Kolekcjonerskie\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "main")(14, "section", 3)(15, "mat-card", 4)(16, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Miros\u0142aw Dubaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-card-content")(25, "pre", 7)(26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-card-actions", 8)(29, "div", 9)(30, "a", 10)(31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "a", 13)(34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "a", 15)(37, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "a", 17)(40, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_42_listener() { return ctx.openBottomSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "section")(49, "mat-tab-group", 21)(50, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, AppComponent_ng_container_52_Template, 2, 6, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-list")(56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, AppComponent_mat_list_item_59_Template, 8, 4, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, AppComponent_mat_list_item_64_Template, 8, 4, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, AppComponent_mat_list_item_69_Template, 8, 4, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, AppComponent_mat_list_item_74_Template, 8, 4, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "mat-list")(78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, AppComponent_mat_list_item_81_Template, 11, 10, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, AppComponent_mat_list_item_86_Template, 8, 4, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](87, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](91, AppComponent_mat_list_item_91_Template, 8, 4, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](92, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, AppComponent_mat_list_item_96_Template, 8, 4, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "aside")(98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](99, AppComponent_div_99_Template, 4, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 29, "CardSubtitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate5"]("  let me = work => \"", "{", "\"for (;;) \"", "{", "\"you(work);\"", "}}", "\";\n  const you = boss => alert(`Yes $\"", "{", "\"boss\"", "}", "\"!`);\n  me('I got the job!');");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 31, "ContactMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 33, "AboutMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 35, "Experience"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](54, 37, "Skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 39, "Programming"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.skills.programming);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 41, "Technologies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.skills.technologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](68, 43, "Tools"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.skills.tools);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](73, 45, "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.skills.other);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](76, 47, "Qualifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 49, "Courses"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.qualifications.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 51, "Education"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.qualifications.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](90, 53, "Languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.qualifications.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](95, 55, "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.qualifications.other);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.qualifications.languages);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatDrawer, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardComponent, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatLine, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["main[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1920px;\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1;\n}\n\nsection.header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n\n@media screen and (min-width: 1080px) {\n  section.header[_ngcontent-%COMP%] {\n    flex: 0 1 150px;\n  }\n}\n\naside[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 1;\n}\n\naside[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\naside[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.aboutme-sidenav[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQUU7RUFDRSx1QkFBQTtBQUVKOztBQUFJO0VBSEY7SUFJSSxlQUFBO0VBR0o7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFFSjs7QUFESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFHTjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGZsZXg6IDEgMTtcclxuICAmLmhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDgwcHgpIHtcclxuICAgICAgZmxleDogMCAxIDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXNpZGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLmxhbmd1YWdlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWJvdXRtZS1zaWRlbmF2IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts/contacts.component */ 3630);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ 7243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);




















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient]
                }
            }),
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__.ContactsComponent,
        _card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule] }); })();


/***/ }),

/***/ 4605:
/*!***********************************!*\
  !*** ./src/app/assets.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsService": () => (/* binding */ AssetsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class AssetsService {
    constructor(http) {
        this.http = http;
    }
    getCards() {
        return this.http.get('/assets/cards.json');
    }
    getSkills() {
        return this.http.get('/assets/skills.json');
    }
    getQualifications() {
        return this.http.get('/assets/qualifications.json');
    }
}
AssetsService.ɵfac = function AssetsService_Factory(t) { return new (t || AssetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AssetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssetsService, factory: AssetsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7243:
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







function CardComponent_mat_expansion_panel_14_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 9);
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", icon_r3);
} }
function CardComponent_mat_expansion_panel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardComponent_mat_expansion_panel_14_mat_icon_9_Template, 1, 1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, project_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, project_r1.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.icons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, project_r1.details), " ");
} }
class CardComponent {
    constructor() {
        this.date = '';
        this.companyName = '';
        this.jobTitle = 'SoftwareDeveloper';
        this.companyLogoClass = 'card__header-image card__header-image--pgs';
        this.link = '';
        this.projects = [];
        this.step = 0;
    }
    ngOnInit() {
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { date: "date", companyName: "companyName", jobTitle: "jobTitle", companyLogoClass: "companyLogoClass", link: "link", projects: "projects" }, decls: 23, vars: 14, consts: [[1, "card", "card--main", "mat-elevation-z6"], ["mat-card-avatar", ""], [1, "accordion-headers-align"], [4, "ngFor", "ngForOf"], ["align", "end"], ["target", "_blank", 3, "href"], ["mat-mini-fab", "", "aria-label", "Example icon button with a home icon"], [1, "icons"], [3, "svgIcon", 4, "ngFor", "ngForOf"], [3, "svgIcon"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article")(1, "mat-card", 0)(2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content")(10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CardComponent_mat_expansion_panel_14_Template, 12, 10, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 4)(16, "a", 5)(17, "button", 6)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.companyLogoClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.jobTitle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "Projects"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, ctx.date), " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelDescription, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardFooter], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".accordion-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-card-footer[_ngcontent-%COMP%] {\n  padding: 2px 5px;\n  color: lightgray;\n  font-size: 10px;\n}\n\n.mat-card-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.mat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n.icons[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0FBRUo7O0FBR0U7RUFDRSxpQkFBQTtBQUFKIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3JkaW9uLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3630:
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 22, vars: 9, consts: [["matLine", "", "href", "tel:+48530111699"], ["mat-icon-button", ""], ["matLine", "", "href", "mailto:miroslaw.dubaj@gmail.com"], ["matLine", "", "href", "https://wa.me/48530111699"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list")(1, "mat-list-item")(2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item")(9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1)(13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item")(16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 1)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "CallMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "MailMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, "WhatsappMe"));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatLine, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4022:
/*!***********************************************!*\
  !*** ./src/app/svg-icons-registry.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgIconsRegistryService": () => (/* binding */ SvgIconsRegistryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);



class SvgIconsRegistryService {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon(`adobephotoshop`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/adobephotoshop.svg"));
        this.matIconRegistry.addSvgIcon(`angular`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/angular.svg"));
        this.matIconRegistry.addSvgIcon(`azuredevops`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/azuredevops.svg"));
        this.matIconRegistry.addSvgIcon(`bitbucket`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/bitbucket.svg"));
        this.matIconRegistry.addSvgIcon(`bootstrap`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/bootstrap.svg"));
        this.matIconRegistry.addSvgIcon(`csharp`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/csharp.svg"));
        this.matIconRegistry.addSvgIcon(`css3`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/css3.svg"));
        this.matIconRegistry.addSvgIcon(`cypress`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/cypress.svg"));
        this.matIconRegistry.addSvgIcon(`docker`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/docker.svg"));
        this.matIconRegistry.addSvgIcon(`dotnet`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/dotnet.svg"));
        this.matIconRegistry.addSvgIcon(`facebook`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/facebook.svg"));
        this.matIconRegistry.addSvgIcon(`gimp`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/gimp.svg"));
        this.matIconRegistry.addSvgIcon(`git`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/git.svg"));
        this.matIconRegistry.addSvgIcon(`github`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg"));
        this.matIconRegistry.addSvgIcon(`gitlab`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/gitlab.svg"));
        this.matIconRegistry.addSvgIcon(`html5`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/html5.svg"));
        this.matIconRegistry.addSvgIcon(`java`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/java.svg"));
        this.matIconRegistry.addSvgIcon(`javascript`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/javascript.svg"));
        this.matIconRegistry.addSvgIcon(`jirasoftware`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/jirasoftware.svg"));
        this.matIconRegistry.addSvgIcon(`jquery`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/jquery.svg"));
        this.matIconRegistry.addSvgIcon(`linux`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linux.svg"));
        this.matIconRegistry.addSvgIcon(`linkedin`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg"));
        this.matIconRegistry.addSvgIcon(`lodash`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/lodash.svg"));
        this.matIconRegistry.addSvgIcon(`mariadb`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/mariadb.svg"));
        this.matIconRegistry.addSvgIcon(`materialdesign`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/materialdesign.svg"));
        this.matIconRegistry.addSvgIcon(`mongodb`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/mongodb.svg"));
        this.matIconRegistry.addSvgIcon(`mysql`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/mysql.svg"));
        this.matIconRegistry.addSvgIcon(`nestjs`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/nestjs.svg"));
        this.matIconRegistry.addSvgIcon(`nodemon`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/nodemon.svg"));
        this.matIconRegistry.addSvgIcon(`nodedotjs`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/nodedotjs.svg"));
        this.matIconRegistry.addSvgIcon(`npm`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/npm.svg"));
        this.matIconRegistry.addSvgIcon(`nuxtdotjs`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/nuxtdotjs.svg"));
        this.matIconRegistry.addSvgIcon(`php`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/php.svg"));
        this.matIconRegistry.addSvgIcon(`postgresql`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/postgresql.svg"));
        this.matIconRegistry.addSvgIcon(`postman`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/postman.svg"));
        this.matIconRegistry.addSvgIcon(`prettier`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/prettier.svg"));
        this.matIconRegistry.addSvgIcon(`quasar`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/quasar.svg"));
        this.matIconRegistry.addSvgIcon(`rancher`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/rancher.svg"));
        this.matIconRegistry.addSvgIcon(`react`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/react.svg"));
        this.matIconRegistry.addSvgIcon(`reactivex`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/reactivex.svg"));
        this.matIconRegistry.addSvgIcon(`redux`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/redux.svg"));
        this.matIconRegistry.addSvgIcon(`sass`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/sass.svg"));
        this.matIconRegistry.addSvgIcon(`stackoverflow`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/stackoverflow.svg"));
        this.matIconRegistry.addSvgIcon(`swagger`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/swagger.svg"));
        this.matIconRegistry.addSvgIcon(`symfony`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/symfony.svg"));
        this.matIconRegistry.addSvgIcon(`typescript`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/typescript.svg"));
        this.matIconRegistry.addSvgIcon(`ubuntu`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/ubuntu.svg"));
        this.matIconRegistry.addSvgIcon(`udemy`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/udemy.svg"));
        this.matIconRegistry.addSvgIcon(`visualstudio`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/visualstudio.svg"));
        this.matIconRegistry.addSvgIcon(`visualstudiocode`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/visualstudiocode.svg"));
        this.matIconRegistry.addSvgIcon(`vuedotjs`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/vuedotjs.svg"));
        this.matIconRegistry.addSvgIcon(`webpack`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/webpack.svg"));
        this.matIconRegistry.addSvgIcon(`windows`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/windows.svg"));
        this.matIconRegistry.addSvgIcon(`woocommerce`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/woocommerce.svg"));
        this.matIconRegistry.addSvgIcon(`wordpress`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/wordpress.svg"));
        console.log(matIconRegistry);
        this.matIconRegistry.addSvgIcon(`gb`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/flags/gb.svg"));
        this.matIconRegistry.addSvgIcon(`pl`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/flags/pl.svg"));
        this.matIconRegistry.addSvgIcon(`ua`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/flags/ua.svg"));
        this.matIconRegistry.addSvgIcon(`de`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/flags/de.svg"));
    }
}
SvgIconsRegistryService.ɵfac = function SvgIconsRegistryService_Factory(t) { return new (t || SvgIconsRegistryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
SvgIconsRegistryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SvgIconsRegistryService, factory: SvgIconsRegistryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map