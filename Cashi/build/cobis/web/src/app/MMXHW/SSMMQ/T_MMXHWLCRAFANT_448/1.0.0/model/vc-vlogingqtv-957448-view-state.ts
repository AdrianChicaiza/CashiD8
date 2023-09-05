//Designer Generator v8.0.1 - SPR 2023-01 27/01/2023

import { CobisDesignerUtil, ConstantsApi, VisualValidationTypeEnum } from "cobis-designer";
import { CobisCommonsService } from 'cobis-commons';
import {FormBuilder, FormGroup,ValidatorFn, Validators} from "@angular/forms";
import { of } from 'rxjs';
import * as CobisDesignerControls from "cobis-designer-controls";
export class ViewState {
public T_MMXHWLCRAFANT_448!:FormGroup;
public VC_VLOGINGQTV_957448:CobisDesignerControls.CobisGroupBoxModel = new CobisDesignerControls.CobisGroupBoxModel();
public G_VLOGINGGMI_533703 : CobisDesignerControls.CobisGroupBoxModel = new CobisDesignerControls.CobisGroupBoxModel();
public G_VLOGINHZRV_214703 : CobisDesignerControls.CobisGroupBoxModel = new CobisDesignerControls.CobisGroupBoxModel();
public G_VLOGINFPLQ_732703 : CobisDesignerControls.CobisGroupBoxModel = new CobisDesignerControls.CobisGroupBoxModel();
public G_VLOGINWBPX_816703 : CobisDesignerControls.CobisGroupBoxModel = new CobisDesignerControls.CobisGroupBoxModel();
public G_VLOGINOANM_342703 : CobisDesignerControls.CobisGroupBoxModel = new CobisDesignerControls.CobisGroupBoxModel();
public G_VLOGINHZRV_214703_default_blank: CobisDesignerControls.CobisSpacerModel = new CobisDesignerControls.CobisSpacerModel();
public VA_VASIMPLELABELLL_368703: CobisDesignerControls.CobisTextLabelModel = new CobisDesignerControls.CobisTextLabelModel();
public VA_1UZKJLNKXEHIQXX_216703: CobisDesignerControls.CobisTextInputBoxModel = new CobisDesignerControls.CobisTextInputBoxModel();
public VA_2UGQVYVFVAJUEAI_343703: CobisDesignerControls.CobisTextInputBoxModel = new CobisDesignerControls.CobisTextInputBoxModel();
public VA_VAIMAGEBUTTONNN_578703: CobisDesignerControls.CobisButtonModel = new CobisDesignerControls.CobisButtonModel();
public VA_VABUTTONSVRDNWB_452703: CobisDesignerControls.CobisButtonModel = new CobisDesignerControls.CobisButtonModel();
public VA_VASIMPLELABELLL_847703: CobisDesignerControls.CobisTextLabelModel = new CobisDesignerControls.CobisTextLabelModel();
public VA_VAIMAGEBUTTONNN_409703: CobisDesignerControls.CobisButtonModel = new CobisDesignerControls.CobisButtonModel();
public VA_VAIMAGEBUTTONNN_914703: CobisDesignerControls.CobisButtonModel = new CobisDesignerControls.CobisButtonModel();
public VA_VAIMAGEBUTTONNN_936703: CobisDesignerControls.CobisButtonModel = new CobisDesignerControls.CobisButtonModel();
public VA_VASIMPLELABELLL_507703: CobisDesignerControls.CobisTextLabelModel = new CobisDesignerControls.CobisTextLabelModel();
public T_MMXHWLCRAFANT_448_ACCEPT: CobisDesignerControls.CobisButtonModel = new CobisDesignerControls.CobisButtonModel();
public T_MMXHWLCRAFANT_448_CANCEL: CobisDesignerControls.CobisButtonModel = new CobisDesignerControls.CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_VLOGINGQTV_957448.id="VC_VLOGINGQTV_957448";
this.VC_VLOGINGQTV_957448.name="VLogin";
this.VC_VLOGINGQTV_957448.colSpan=3;
this.VC_VLOGINGQTV_957448.columns=1;
this.VC_VLOGINGQTV_957448.enabled=ConstantsApi.mode.All;
this.G_VLOGINGGMI_533703.id="G_VLOGINGGMI_533703";
this.G_VLOGINGGMI_533703.name="GroupLayout2529";
this.G_VLOGINGGMI_533703.columns=2;
this.G_VLOGINGGMI_533703.childrenGroups = ["G_VLOGINHZRV_214703","G_VLOGINFPLQ_732703"];
this.G_VLOGINGGMI_533703.colSpan=1;
this.G_VLOGINGGMI_533703.enabled=ConstantsApi.mode.All;
this.G_VLOGINGGMI_533703.visible=ConstantsApi.mode.All;
this.G_VLOGINHZRV_214703.id="G_VLOGINHZRV_214703";
this.G_VLOGINHZRV_214703.name="Group1493";
this.G_VLOGINHZRV_214703.columns=3;
this.G_VLOGINHZRV_214703.labelOrientation="Top";
this.G_VLOGINHZRV_214703.colSpan=1;
this.G_VLOGINHZRV_214703.enabled=ConstantsApi.mode.All;
this.G_VLOGINHZRV_214703.visible=ConstantsApi.mode.All;
this.G_VLOGINHZRV_214703.className = "backgr";
this.G_VLOGINFPLQ_732703.id="G_VLOGINFPLQ_732703";
this.G_VLOGINFPLQ_732703.name="GroupLayout2442";
this.G_VLOGINFPLQ_732703.columns=1;
this.G_VLOGINFPLQ_732703.childrenGroups = ["G_VLOGINWBPX_816703","G_VLOGINOANM_342703"];
this.G_VLOGINFPLQ_732703.colSpan=1;
this.G_VLOGINFPLQ_732703.enabled=ConstantsApi.mode.All;
this.G_VLOGINFPLQ_732703.visible=ConstantsApi.mode.All;
this.G_VLOGINWBPX_816703.id="G_VLOGINWBPX_816703";
this.G_VLOGINWBPX_816703.entity="UserLogin";
this.G_VLOGINWBPX_816703.name="Group2249";
this.G_VLOGINWBPX_816703.columns=6;
this.G_VLOGINWBPX_816703.labelOrientation="Top";
this.G_VLOGINWBPX_816703.colSpan=1;
this.G_VLOGINWBPX_816703.enabled=ConstantsApi.mode.All;
this.G_VLOGINWBPX_816703.visible=ConstantsApi.mode.All;
this.G_VLOGINWBPX_816703.attList = ["usuario","contrasena"];
this.G_VLOGINOANM_342703.id="G_VLOGINOANM_342703";
this.G_VLOGINOANM_342703.entity="Contactanos";
this.G_VLOGINOANM_342703.name="Group1372";
this.G_VLOGINOANM_342703.columns=6;
this.G_VLOGINOANM_342703.labelOrientation="Top";
this.G_VLOGINOANM_342703.colSpan=1;
this.G_VLOGINOANM_342703.enabled=ConstantsApi.mode.All;
this.G_VLOGINOANM_342703.visible=ConstantsApi.mode.All;
this.T_MMXHWLCRAFANT_448_ACCEPT.id = "T_MMXHWLCRAFANT_448_ACCEPT";
this.T_MMXHWLCRAFANT_448_ACCEPT.name = "Accept";
this.T_MMXHWLCRAFANT_448_ACCEPT.causesValidation = false;
this.T_MMXHWLCRAFANT_448_ACCEPT.submitOnEnter = false;
this.T_MMXHWLCRAFANT_448_ACCEPT.setFocus = false;
this.T_MMXHWLCRAFANT_448_ACCEPT.close = false;
this.T_MMXHWLCRAFANT_448_ACCEPT.label = cobis.translate("DSGNR.SYS_DSGNR_LBLACEPT0_00007");
this.T_MMXHWLCRAFANT_448_ACCEPT.enabled = ConstantsApi.mode.All;
this.T_MMXHWLCRAFANT_448_ACCEPT.visible = ConstantsApi.mode.All;
this.T_MMXHWLCRAFANT_448_CANCEL.id = "T_MMXHWLCRAFANT_448_CANCEL";
this.T_MMXHWLCRAFANT_448_CANCEL.name = "Cancel";
this.T_MMXHWLCRAFANT_448_CANCEL.causesValidation = false;
this.T_MMXHWLCRAFANT_448_CANCEL.submitOnEnter = false;
this.T_MMXHWLCRAFANT_448_CANCEL.setFocus = false;
this.T_MMXHWLCRAFANT_448_CANCEL.close = false;
this.T_MMXHWLCRAFANT_448_CANCEL.label = cobis.translate("DSGNR.SYS_DSGNR_LBLCANCEL_00006");
this.T_MMXHWLCRAFANT_448_CANCEL.enabled = ConstantsApi.mode.All;
this.T_MMXHWLCRAFANT_448_CANCEL.visible = ConstantsApi.mode.All;
this.G_VLOGINHZRV_214703_default_blank.id = "G_VLOGINHZRV_214703_default_blank";
this.G_VLOGINHZRV_214703_default_blank.name = "G_VLOGINHZRV_214703_default_blank";
this.G_VLOGINHZRV_214703_default_blank.colSpan = 1;
this.G_VLOGINHZRV_214703_default_blank.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_368703.id = "VA_VASIMPLELABELLL_368703";
this.VA_VASIMPLELABELLL_368703.name = "";
this.VA_VASIMPLELABELLL_368703.label = cobis.translate("MMXHW.LBL_MMXHW_BIENVENII_89005");
this.VA_VASIMPLELABELLL_368703.colSpan = 6;
this.VA_VASIMPLELABELLL_368703.withoutLabel = false;
this.VA_VASIMPLELABELLL_368703.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_368703.visible= ConstantsApi.mode.All;
this.VA_1UZKJLNKXEHIQXX_216703.label = cobis.translate("MMXHW.LBL_MMXHW_USUARIOKS_25718");
this.VA_1UZKJLNKXEHIQXX_216703.entity = "UserLogin";
this.VA_1UZKJLNKXEHIQXX_216703.attribute = "usuario";
this.VA_1UZKJLNKXEHIQXX_216703.className= "inputStyle";
this.VA_1UZKJLNKXEHIQXX_216703.textCase= CobisDesignerControls.TextCaseOptions.NONE;
this.VA_1UZKJLNKXEHIQXX_216703.name="usuario";
this.VA_1UZKJLNKXEHIQXX_216703.id="VA_1UZKJLNKXEHIQXX_216703";
this.VA_1UZKJLNKXEHIQXX_216703.colSpan=6;
this.VA_1UZKJLNKXEHIQXX_216703.withoutLabel = false;
this.VA_1UZKJLNKXEHIQXX_216703.readOnly = ConstantsApi.mode.Query;
this.VA_1UZKJLNKXEHIQXX_216703.enabled = ConstantsApi.mode.All;
this.VA_1UZKJLNKXEHIQXX_216703.visible= ConstantsApi.mode.All;
this.VA_2UGQVYVFVAJUEAI_343703.label = cobis.translate("MMXHW.LBL_MMXHW_CONTRASEE_80774");
this.VA_2UGQVYVFVAJUEAI_343703.entity = "UserLogin";
this.VA_2UGQVYVFVAJUEAI_343703.attribute = "contrasena";
this.VA_2UGQVYVFVAJUEAI_343703.className= "inputStyle";
this.VA_2UGQVYVFVAJUEAI_343703.textCase= CobisDesignerControls.TextCaseOptions.NONE;
this.VA_2UGQVYVFVAJUEAI_343703.name="contrasena";
this.VA_2UGQVYVFVAJUEAI_343703.id="VA_2UGQVYVFVAJUEAI_343703";
this.VA_2UGQVYVFVAJUEAI_343703.colSpan=5;
this.VA_2UGQVYVFVAJUEAI_343703.withoutLabel = false;
this.VA_2UGQVYVFVAJUEAI_343703.readOnly = ConstantsApi.mode.Query;
this.VA_2UGQVYVFVAJUEAI_343703.enabled = ConstantsApi.mode.All;
this.VA_2UGQVYVFVAJUEAI_343703.visible= ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_578703.id = "VA_VAIMAGEBUTTONNN_578703";
this.VA_VAIMAGEBUTTONNN_578703.name = "";
this.VA_VAIMAGEBUTTONNN_578703.colSpan = 1;
this.VA_VAIMAGEBUTTONNN_578703.withoutLabel = false;
this.VA_VAIMAGEBUTTONNN_578703.causesValidation=false;
this.VA_VAIMAGEBUTTONNN_578703.submitOnEnter=false;
this.VA_VAIMAGEBUTTONNN_578703.setFocus=false;
this.VA_VAIMAGEBUTTONNN_578703.enabled = ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_578703.visible= ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_578703.icon = "fa fa-eye";
this.VA_VABUTTONSVRDNWB_452703.id = "VA_VABUTTONSVRDNWB_452703";
this.VA_VABUTTONSVRDNWB_452703.name = "";
this.VA_VABUTTONSVRDNWB_452703.label = cobis.translate("MMXHW.LBL_MMXHW_INICIARIS_21889");
this.VA_VABUTTONSVRDNWB_452703.colSpan = 6;
this.VA_VABUTTONSVRDNWB_452703.withoutLabel = false;
this.VA_VABUTTONSVRDNWB_452703.causesValidation=false;
this.VA_VABUTTONSVRDNWB_452703.submitOnEnter=false;
this.VA_VABUTTONSVRDNWB_452703.setFocus=false;
this.VA_VABUTTONSVRDNWB_452703.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONSVRDNWB_452703.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_847703.id = "VA_VASIMPLELABELLL_847703";
this.VA_VASIMPLELABELLL_847703.name = "";
this.VA_VASIMPLELABELLL_847703.label = cobis.translate("MMXHW.LBL_MMXHW_CONTCTAON_34901");
this.VA_VASIMPLELABELLL_847703.colSpan = 6;
this.VA_VASIMPLELABELLL_847703.withoutLabel = false;
this.VA_VASIMPLELABELLL_847703.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_847703.visible= ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_409703.id = "VA_VAIMAGEBUTTONNN_409703";
this.VA_VAIMAGEBUTTONNN_409703.name = "";
this.VA_VAIMAGEBUTTONNN_409703.colSpan = 1;
this.VA_VAIMAGEBUTTONNN_409703.withoutLabel = true;
this.VA_VAIMAGEBUTTONNN_409703.causesValidation=false;
this.VA_VAIMAGEBUTTONNN_409703.submitOnEnter=false;
this.VA_VAIMAGEBUTTONNN_409703.setFocus=false;
this.VA_VAIMAGEBUTTONNN_409703.enabled = ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_409703.visible= ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_409703.icon = "fa fa-facebook";
this.VA_VAIMAGEBUTTONNN_914703.id = "VA_VAIMAGEBUTTONNN_914703";
this.VA_VAIMAGEBUTTONNN_914703.name = "";
this.VA_VAIMAGEBUTTONNN_914703.colSpan = 1;
this.VA_VAIMAGEBUTTONNN_914703.withoutLabel = true;
this.VA_VAIMAGEBUTTONNN_914703.causesValidation=false;
this.VA_VAIMAGEBUTTONNN_914703.submitOnEnter=false;
this.VA_VAIMAGEBUTTONNN_914703.setFocus=false;
this.VA_VAIMAGEBUTTONNN_914703.enabled = ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_914703.visible= ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_914703.icon = "fa fa-instagram";
this.VA_VAIMAGEBUTTONNN_936703.id = "VA_VAIMAGEBUTTONNN_936703";
this.VA_VAIMAGEBUTTONNN_936703.name = "";
this.VA_VAIMAGEBUTTONNN_936703.colSpan = 1;
this.VA_VAIMAGEBUTTONNN_936703.withoutLabel = true;
this.VA_VAIMAGEBUTTONNN_936703.causesValidation=false;
this.VA_VAIMAGEBUTTONNN_936703.submitOnEnter=false;
this.VA_VAIMAGEBUTTONNN_936703.setFocus=false;
this.VA_VAIMAGEBUTTONNN_936703.enabled = ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_936703.visible= ConstantsApi.mode.All;
this.VA_VAIMAGEBUTTONNN_936703.icon = "fa fa-twitter";
this.VA_VASIMPLELABELLL_507703.id = "VA_VASIMPLELABELLL_507703";
this.VA_VASIMPLELABELLL_507703.name = "";
this.VA_VASIMPLELABELLL_507703.label = cobis.translate("MMXHW.LBL_MMXHW_HTPPSWWCT_82781");
this.VA_VASIMPLELABELLL_507703.colSpan = 6;
this.VA_VASIMPLELABELLL_507703.withoutLabel = false;
this.VA_VASIMPLELABELLL_507703.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_507703.visible= ConstantsApi.mode.All;
this.T_MMXHWLCRAFANT_448 = this.formBuilder.group({
UserLogin: this.formBuilder.group({
usuario:[{value: null, disabled: !this.VA_1UZKJLNKXEHIQXX_216703.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1UZKJLNKXEHIQXX_216703.validationFunctions)],
contrasena:[{value: null, disabled: !this.VA_2UGQVYVFVAJUEAI_343703.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2UGQVYVFVAJUEAI_343703.validationFunctions)],
idUsuario:[null],
}
),
Contactanos: this.formBuilder.group({
idContactos:[null],
linkFacebook:[null],
linkInstagram:[null],
linkTwitter:[null],
}
),
});
}
}