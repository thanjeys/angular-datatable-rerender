import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';

import { MeasurmentService } from '../../services/measurment.service';

@Component({
  selector: 'app-addmeasurments',
  templateUrl: './addmeasurments.component.html',
  styleUrls: ['./addmeasurments.component.css']
})
export class AddmeasurmentsComponent implements OnInit {
   
  form: any = {
    fl_value: null,
    bl_value: null,
    suitl_value: null,
    knl_value: null,
    wl_value: null,
    sh_value: null,
    nsh_value: null,
    sl_value: null,
    ch_value: null,
    st_value: null,
    h_value: null,
    cf_value: null,
    cb_value: null,
    bicep_value: null,
    hb_value: null,
    hf_value: null,
    n_value: null,
    l_data: null,
    kl_data: null,
    sl_data: null,
    arm_data: null,
    farm_data: null,
    cuff_data: null,
    l_measurment: null,
    w_measurment: null,
    h_measurment: null,
    fth_measurment: null,
    kn_measurment: null,
    b_measurment: null,
    hl_measurment: null,
    bal_measurment: null,
    remarks: null,
    backshape: null,
    stomach: null,
    shoulder: null,
    button: null,
    lapel: null,
    vent: null,
    pocket: null,
    jodhpuri: null,
    type: null,
    pleat: null,
    pocket_type: null,
    back_pocket: null,
    shape: null,
    cut_way: null,
    collar_type: null,
    placket: null,
    cuff_type: null,
    other: null,
    shape_type: null,
    fit_type: null
  };

  constructor(private measurmentService: MeasurmentService) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    const { suit_fl, suit_bl, suit_suitl, suit_knl, suit_wl, suit_sh, suit_nsh, suit_sl, suit_ch, suit_st, suit_h, suit_cf, suit_cb, suit_bicep, suit_hb, suit_hf, suit_n, shirt_l, shirt_kl, shirt_sl, shirt_arm, shirt_farm, shirt_cuff, trouser_l, trouser_w, trouser_h, trouser_fth, trouser_kn, trouser_b, trouser_hl, trouser_bal, remarks, backshape, stomach, shoulder, button, lapel, vent, pocket, jodhpuri, type, pleat, pocket_type, back_pocket, shape, cut_way, collar_type, placket, cuff_type, other, shape_type, fit_type} = this.form;
   
    this.measurmentService.storeMeasurment(suit_fl, suit_bl, suit_suitl, suit_knl, suit_wl, suit_sh, suit_nsh, suit_sl, suit_ch, suit_st, suit_h, suit_cf, suit_cb, suit_bicep, suit_hb, suit_hf, suit_n, shirt_l, shirt_kl, shirt_sl, shirt_arm, shirt_farm, shirt_cuff, trouser_l, trouser_w, trouser_h, trouser_fth, trouser_kn, trouser_b, trouser_hl, trouser_bal, remarks, backshape, stomach, shoulder, button, lapel, vent, pocket, jodhpuri, type, pleat, pocket_type, back_pocket, shape, cut_way, collar_type, placket, cuff_type, other, shape_type, fit_type).subscribe({
      next: data => {      
        if(data.success == false){
          alert('Measurments Added Successfully');         
        }  else{
        
         } 
      },
      error: err => {       
        
      }
    });
  }

}
