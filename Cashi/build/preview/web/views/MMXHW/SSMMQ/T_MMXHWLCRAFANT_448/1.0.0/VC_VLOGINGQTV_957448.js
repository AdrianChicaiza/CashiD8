//Designer Generator v8.0.1 - SPR 2023-01 27/01/2023
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.vlogin = designerEvents.api.vlogin || designer.dsgEvents();
var urlBase = window.location.pathname;
function VC_VLOGINGQTV_957448(cobisMainModule) {
cobisMainModule.controllerProvider.register("VC_VLOGINGQTV_957448_MAIN_CTRL", ["$scope", "breadcrumbs",
function($scope, breadcrumbs) {
$scope.breadcrumbs = breadcrumbs;
}]);
cobisMainModule.controllerProvider.register("VC_VLOGINGQTV_957448_CTRL", ["cobisMessage", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",
function(cobisMessage, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
$scope.designer = designer;
$scope.validatorOptions = validatorOptions;
$scope.vc = designer.initViewContainer({
moduleId: "MMXHW",
subModuleId: "SSMMQ",
taskId: "T_MMXHWLCRAFANT_448",
taskVersion: "1.0.0",
viewContainerId: "VC_VLOGINGQTV_957448",
hasCloseModalEvent: false,
serverEvents: false},
"/CTSProxy/services/resources/MMXHW/SSMMQ/T_MMXHWLCRAFANT_448",
designerEvents.api.vlogin,
$scope.rowData );
$scope.kendo = kendo;
//Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
$scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
$scope.dateFormat = 'yyyy/MM/dd';
$scope.dateFormatPlaceholder = $scope.dateFormat;
$scope.vc.routeProvider = cobisMainModule.routeProvider;
if (!$scope.vc.loaded) {
var page = {
hasInitDataSupport: true,
hasChangeInitDataSupport: false,
hasSearchRenderEvent: false,
ejecInitData: false,
ejecChangeInitData: false,
ejecSearchRenderEvent: false,
hasInitData: false,
hasChangeInitData: false,
hasCRUDSupport: false,
vcName: 'VC_VLOGINGQTV_957448'
};
if(typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined'){
$scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
$scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
} else {
//CobisPattern no definido en framework de Designer como constante. Actualizar Framework
$scope.vc.cobisPattern = 0;
$scope.vc.isConsolidateView = false;
}
if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
$scope.vc.pk = $scope.queryParameters.pk;
$scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
} else {
$scope.vc.pk = $location.search().pk;
$scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
}
$scope.vc.args.pk = $scope.vc.pk;
$scope.vc.args.mode = $scope.vc.mode;
if(cobis.userContext.getValue(cobis.constant.USER_NAME)){
$scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
}else{
$scope.vc.args.user = "UserOutContainer";
}
$scope.vc.customDialogParameters = $scope.customDialogParameters;
$scope.vc.args.channel = $location.search().channel;
$scope.vc.metadata = {
taskPk : {
moduleId : 'MMXHW',
subModuleId : 'SSMMQ',
taskId : 'T_MMXHWLCRAFANT_448',
version : '1.0.0',
user : $scope.vc.args.user
},
entityNames: {
Contactanos: "Contactanos",
UserLogin: "UserLogin"
},
entities : {
Contactanos : {
idContactos: 'AT10_IDCONTTA692',
linkFacebook: 'AT73_LINKFABB692',
linkInstagram: 'AT80_LINKINTS692',
linkTwitter: 'AT94_LINKTWTR692'
,
_pks: [],
_entityId: 'EN_CONTACTSA_692',
_entityVersion: '1.0.0',
_transient: false },
UserLogin : {
contrasena: 'AT33_CONTRAAE626',
usuario: 'AT37_USUARIOO626',
idUsuario: 'AT44_IDUSUARR626'
,
_pks: [],
_entityId: 'EN_USERLOGNI_626',
_entityVersion: '1.0.0',
_transient: false }
},
relations : [
]
};
$scope.vc.queryProperties = {};
var defaultValues = {
Contactanos:{
},
UserLogin:{
}
};
$scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist){
var channel = $scope.vc.args.channel;
for(var en in defaultValues){
if(defaultValues.hasOwnProperty(en) && en === entityName){
for(var att in defaultValues[en]){
if(defaultValues[en].hasOwnProperty(att) && att === attributeName){
for (var ch in defaultValues[en][att]){
if(defaultValues[en][att].hasOwnProperty(ch) && ch === channel){
return defaultValues[en][att][ch];
}
}
}
}
}
}
if(typeof valueIfNotExist !== "undefined"){
return valueIfNotExist;
}else{
return null;
}
};
$scope.vc.temporaryRead = function(page) {return page;};
$scope.vc.viewState.keyDown = function(e) {
dsgnrUtils.container.validateOnEnter(e, $scope.vc);
};
$scope.vc.viewState.VC_VLOGINGQTV_957448 = {
style: []
};
//ViewState - Group: GroupLayout2529
$scope.vc.createViewState({
id: "G_VLOGINGGMI_533703"
,hasId: true
,componentStyle: []
,label: 'GroupLayout2529'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Group: Group1493
$scope.vc.createViewState({
id: "G_VLOGINHZRV_214703"
,hasId: true
,componentStyle: ["backgr"]
,label: 'Group1493'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "G_VLOGINHZRV_214703-default-blank"
,componentStyle: []
,label: ''
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.None
,visible: designer.constants.mode.All
});
//ViewState - Group: GroupLayout2442
$scope.vc.createViewState({
id: "G_VLOGINFPLQ_732703"
,hasId: true
,componentStyle: []
,label: 'GroupLayout2442'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.model.UserLogin = {
contrasena: $scope.vc.channelDefaultValues("UserLogin","contrasena"),
usuario: $scope.vc.channelDefaultValues("UserLogin","usuario"),
idUsuario: $scope.vc.channelDefaultValues("UserLogin","idUsuario")
};
//ViewState - Group: Group2249
$scope.vc.createViewState({
id: "G_VLOGINWBPX_816703"
,hasId: true
,componentStyle: []
,label: 'Group2249'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VASIMPLELABELLL_368703"
,componentStyle: []
,label: "¡Bienvenido!"
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.None
,visible: designer.constants.mode.All
});
//ViewState - Entity: UserLogin, Attribute: usuario
$scope.vc.createViewState({
id: "VA_1UZKJLNKXEHIQXX_216703"
,componentStyle: ["inputStyle"]
,label: "Usuario"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: UserLogin, Attribute: contrasena
$scope.vc.createViewState({
id: "VA_2UGQVYVFVAJUEAI_343703"
,componentStyle: ["inputStyle"]
,label: "Contraseña"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VAIMAGEBUTTONNN_578703"
,componentStyle: ["iconEye"]
,imageId:"fa fa-eye"
,label: ''
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VABUTTONSVRDNWB_452703"
,componentStyle: ["buttonLog"]
,label: "Iniciar Sesión"
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.model.Contactanos = {
idContactos: $scope.vc.channelDefaultValues("Contactanos","idContactos"),
linkFacebook: $scope.vc.channelDefaultValues("Contactanos","linkFacebook"),
linkInstagram: $scope.vc.channelDefaultValues("Contactanos","linkInstagram"),
linkTwitter: $scope.vc.channelDefaultValues("Contactanos","linkTwitter")
};
//ViewState - Group: Group1372
$scope.vc.createViewState({
id: "G_VLOGINOANM_342703"
,hasId: true
,componentStyle: []
,label: 'Group1372'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VASIMPLELABELLL_847703"
,componentStyle: []
,label: "¡Contáctanos!"
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.None
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VAIMAGEBUTTONNN_409703"
,componentStyle: []
,imageId:"fa fa-facebook"
,label: ''
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VAIMAGEBUTTONNN_914703"
,componentStyle: []
,imageId:"fa fa-instagram"
,label: ''
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VAIMAGEBUTTONNN_936703"
,componentStyle: []
,imageId:"fa fa-twitter"
,label: ''
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VASIMPLELABELLL_507703"
,componentStyle: []
,label: "htpps://www.cuentacashi.com"
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.None
,visible: designer.constants.mode.All
});
//ViewState - Command: Accept
$scope.vc.createViewState({
id: "T_MMXHWLCRAFANT_448_ACCEPT"
,componentStyle: []
,label: 'Accept'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Command: Cancel
$scope.vc.createViewState({
id: "T_MMXHWLCRAFANT_448_CANCEL"
,componentStyle: []
,label: 'Cancel'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
if ($scope.vc.parentVc) {
$scope.vc.afterOpenGridDialog();
}
}
$scope.isInvalid = function (form, field) {
if(!field){
return false;
}
var submitted = $scope.vc.submitted[form.$name];
return ((submitted || field.$dirty) && field.$invalid);
};
$scope._initPage_CRUDExecuteQueryEntities = function(page) {
if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
if(page.hasCRUDSupport){
return $scope.vc.CRUDExecuteQueryEntities(page);
}else{
return page;
}
} else {
return page;
}
};
$scope._initPage_InitializeTrackers = function(page) {
$scope.vc.addChangeEvents($scope);
$scope.vc.crud.addTrackers($scope.vc.model);
return page;
};
$scope._initPage_ChangeInitData = function(page) {
return $scope.vc.changeInitData(page, $scope.vc);
};
$scope._initPage_ProcessRender = function(page) {
if (page.hasSearchRenderEvent) {
$scope.vc.render('VC_VLOGINGQTV_957448');
}
return page;
};
if($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude){
//para ventanas modales se usa ng-include con onload
$scope.runLifeCycle = function () {
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
if(!$scope.isDesignerInclude){
cobis.showMessageWindow.loading(true, "none");
}
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
};
}else{
//con ngView no funciona el $document.ready se cambia por $viewContentLoaded
$scope.$on('$viewContentLoaded', function() {
if ($scope.vc.loaded) {
//Si se esta regresando de otra pantalla
$scope.vc.addAfterInitDataFlags($scope);
$scope.vc.addChangeEvents($scope);
if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
$scope.vc.onCloseModalEvent();
}
if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
$scope.vc.afterCloseGridDialog();
}
cobis.showMessageWindow.loading(false);
} else {
//Si es la primera vez que se ejecuta la pantalla
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
}
});
}
}]);
}
if (typeof cobisMainModule === "undefined") {
var cobisMainModule = cobis.createModule("VC_VLOGINGQTV_957448", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", "designerModule"],[]);
cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",
function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
$ocLazyLoadProvider.config({
asyncLoader: $script
});
$locationProvider.html5Mode({
enabled: true,
requireBase:false
});
cobisMainModule.controllerProvider = $controllerProvider;
cobisMainModule.compileProvider = $compileProvider;
cobisMainModule.routeProvider = $routeProvider;
cobisMainModule.filterProvider = $filterProvider;
cobisMainModule.provide = $provide;
var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
var url_prefix = urlBase.substring(0, urlBase.lastIndexOf('/'));
$routeProvider.when(url_prefix + "/VC_VLOGINGQTV_957448", {
templateUrl: "VC_VLOGINGQTV_957448_FORM.html",
controller: "VC_VLOGINGQTV_957448_CTRL",
label: "VLogin",
}).otherwise({
redirectTo: function (routeParams, path, search) {
return url_prefix + "/VC_VLOGINGQTV_957448?" + $.param(search);
}
});
VC_VLOGINGQTV_957448(cobisMainModule);
}]);
} else {
VC_VLOGINGQTV_957448(cobisMainModule);
}