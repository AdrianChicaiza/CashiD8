//Designer Generator v8.0.1 - SPR 2023-01 27/01/2023


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisChartInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService } from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-vlogingqtv-957448.model';
import { ViewState } from './model/vc-vlogingqtv-957448-view-state';
import { VcVlogingqtv957448Custom } from './vc-vlogingqtv-957448.custom';
import { MMXHWService } from 'src/app/MMXHW/service-modules/MMXHW.service';
@Component({
selector: 'cobis-vc-vlogingqtv-957448',
templateUrl: './vc-vlogingqtv-957448.component.html'
})
export class VcVlogingqtv957448Component extends CobisDesignerComponent implements OnInit, AfterViewInit {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private mmxhw: MMXHWService) {
super(new VcVlogingqtv957448Custom(designer.cobisCommons,mmxhw), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
if (this._vc.afterCloseGridDialogArgs) {
let args = this._vc.afterCloseGridDialogArgs;
this._vc.afterCloseGridDialogArgs = undefined;
this.cobisDesignerEvents.afterCloseGridDialog(args);
}
this.changeDetector.detectChanges();
}
inicializar() {
this.suscripQueryParams = this.activatedRoute.queryParams.subscribe((params) => {
let viewState = new ViewState(this.designer.cobisCommons, this.formBuilder, this.getMode(params));
this.initRefViewState(this.refViewState, viewState);
let formGroupArray = {
UserLogin: viewState.T_MMXHWLCRAFANT_448.controls.UserLogin as FormGroup ,
Contactanos: viewState.T_MMXHWLCRAFANT_448.controls.Contactanos as FormGroup
};
this.metaData = { moduleId: 'MMXHW', subModuleId: 'SSMMQ', taskId: 'T_MMXHWLCRAFANT_448', taskVersion: '1.0.0', vcId: 'VC_VLOGINGQTV_957448', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/MMXHW/SSMMQ/T_MMXHWLCRAFANT_448', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), chartsInfo: new Map<string, ICobisChartInfo[]>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'VLogin' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
}
}
