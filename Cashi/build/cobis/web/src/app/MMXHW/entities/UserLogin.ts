
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class UserLogin  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"contrasena"	,
					"usuario"	,
					"idUsuario"	
			];			
			super(undefined,props);
		}   	    
	}
	public set contrasena (value: string | null) {
    	this.setPropertyValue(value, "contrasena");    	
  	}
  	
  	public get contrasena(): string | null {
    	return this.getPropertyValue("contrasena");    	
  	}
	public set usuario (value: string | null) {
    	this.setPropertyValue(value, "usuario");    	
  	}
  	
  	public get usuario(): string | null {
    	return this.getPropertyValue("usuario");    	
  	}
	public set idUsuario (value: string | null) {
    	this.setPropertyValue(value, "idUsuario");    	
  	}
  	
  	public get idUsuario(): string | null {
    	return this.getPropertyValue("idUsuario");    	
  	}
	
}