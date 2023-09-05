
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Contactanos  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"idContactos"	,
					"linkFacebook"	,
					"linkInstagram"	,
					"linkTwitter"	
			];			
			super(undefined,props);
		}   	    
	}
	public set idContactos (value: string | null) {
    	this.setPropertyValue(value, "idContactos");    	
  	}
  	
  	public get idContactos(): string | null {
    	return this.getPropertyValue("idContactos");    	
  	}
	public set linkFacebook (value: string | null) {
    	this.setPropertyValue(value, "linkFacebook");    	
  	}
  	
  	public get linkFacebook(): string | null {
    	return this.getPropertyValue("linkFacebook");    	
  	}
	public set linkInstagram (value: string | null) {
    	this.setPropertyValue(value, "linkInstagram");    	
  	}
  	
  	public get linkInstagram(): string | null {
    	return this.getPropertyValue("linkInstagram");    	
  	}
	public set linkTwitter (value: string | null) {
    	this.setPropertyValue(value, "linkTwitter");    	
  	}
  	
  	public get linkTwitter(): string | null {
    	return this.getPropertyValue("linkTwitter");    	
  	}
	
}