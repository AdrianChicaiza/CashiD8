import { Injectable} from "@angular/core"
import { CobisDesignerModuleBase } from 'cobis-designer';
import { CobisCommonsService } from 'cobis-commons';

@Injectable({providedIn: 'root'})
export class MMXHWService extends CobisDesignerModuleBase {

    constructor(public cobis: CobisCommonsService){
        super(cobis);
    }

    // Your code here

}