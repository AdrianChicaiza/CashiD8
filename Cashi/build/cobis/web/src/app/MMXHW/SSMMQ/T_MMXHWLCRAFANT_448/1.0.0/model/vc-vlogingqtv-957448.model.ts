import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Contactanos } from "../../../../entities/Contactanos";
import { UserLogin } from "../../../../entities/UserLogin";
export class Model {
private _contactanos!: Contactanos;
private _userLogin!: UserLogin;
constructor(private formGroupArray: any) {
this._contactanos = new Contactanos(formGroupArray["Contactanos"]);
this._userLogin = new UserLogin(formGroupArray["UserLogin"]);
}
public set Contactanos(valores: any) {
this._contactanos = CobisDesignerUtil.getEntityData(this._contactanos, valores);
}
public get Contactanos():Contactanos{
return this._contactanos;
}
public set UserLogin(valores: any) {
this._userLogin = CobisDesignerUtil.getEntityData(this._userLogin, valores);
}
public get UserLogin():UserLogin{
return this._userLogin;
}
}