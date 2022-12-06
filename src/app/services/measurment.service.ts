import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurmentService {

  public REST_API_SERVER:string = `${environment.REST_API_URL}/api/${environment.version}`;

  constructor(private http:HttpClient,
      private router:Router) { }

  // public getMeasurments(params:any = ""):Observable<any>{
  //   return this.http.post(`${this.REST_API_SERVER}/measurmentslist?${params.toString()}`,{ params: ""});
  // }

  // public storeMeasurment(fl_value, bl_value, suitl_value, knl_value, wl_value, sh_value, nsh_value, sl_value, ch_value, st_value, h_value, cf_value, cb_value, bicep_value, hb_value, hf_value, n_value, l_data, kl_data, sl_data, arm_data, farm_data, cuff_data, l_measurment, w_measurment, h_measurment, fth_measurment, kn_measurment, b_measurment, hl_measurment, bal_measurment, remarks):Observable<any>{

  //   return this.http.post(`${this.REST_API_SERVER}/measurment-store`,fl_value, bl_value, suitl_value, knl_value, wl_value, sh_value, nsh_value, sl_value, ch_value, st_value, h_value, cf_value, cb_value, bicep_value, hb_value, hf_value, n_value, l_data, kl_data, sl_data, arm_data, farm_data, cuff_data, l_measurment, w_measurment, h_measurment, fth_measurment, kn_measurment, b_measurment, hl_measurment, bal_measurment, remarks);
  // }


  public storeMeasurment(suit_fl :any, suit_bl:any, suit_suitl:any, suit_knl:any, suit_wl:any, suit_sh:any, suit_nsh:any, suit_sl:any, suit_ch:any, suit_st:any, suit_h:any, suit_cf:any, suit_cb:any, suit_bicep:any, suit_hb:any, suit_hf:any, suit_n:any, shirt_l:any, shirt_kl:any, shirt_sl:any, shirt_arm:any, shirt_farm:any, shirt_cuff:any, trouser_l:any, trouser_w:any, trouser_h:any, trouser_fth:any, trouser_kn:any, trouser_b:any, trouser_hl:any, trouser_bal:any, remarks:any,backshape:any, stomach:any, shoulder:any, button:any, lapel:any, vent:any, pocket:any, jodhpuri:any, type:any, pleat:any, pocket_type:any, back_pocket:any, shape:any, cut_way:any, collar_type:any, placket:any, cuff_type:any, other:any, shape_type:any, fit_type:any): Observable<any> {

    return this.http.post(`${this.REST_API_SERVER}/measurment-store`, {
      suit_fl, suit_bl, suit_suitl, suit_knl, suit_wl, suit_sh, suit_nsh, suit_sl, suit_ch, suit_st, suit_h, suit_cf, suit_cb, suit_bicep, suit_hb, suit_hf, suit_n, shirt_l, shirt_kl, shirt_sl, shirt_arm, shirt_farm, shirt_cuff, trouser_l, trouser_w, trouser_h, trouser_fth, trouser_kn, trouser_b, trouser_hl, trouser_bal, remarks,backshape, stomach, shoulder, button, lapel, vent, pocket, jodhpuri, type, pleat, pocket_type, back_pocket, shape, cut_way, collar_type, placket, cuff_type, other, shape_type, fit_type
    });

    }
    
  
}
