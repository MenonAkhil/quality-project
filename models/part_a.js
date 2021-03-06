// Part A(1)
let mongoose = require('mongoose');

//Part A(1) Schema
var PartA1Schema = mongoose.schema({
  institution_details : {
  institution_name : String,
  address_line_1 : String,
  address_line_2 : String,
  city_or_town : String
  state : String,
  pincode : Number,
  institute_email : String,
  contact_numbers : String,
  institution_head : String,
  telephone_no_with_std_code : String,
  mobile_number : Number,
  iqac_coordinator : String,
  iqac_coordinator_mobile : Number,
  iqac_email : String
},
  naac_track_id : String,
  naac_executive_commitee_no_date : String,
  website_address :String,
  aqar_web_link : String,
  accreditation_details : {
    first_cycle : {
      grade : String,
      cgpa : Number,
      year_of_accreditation : Number,
      validity : Number
    },
    second_cycle : {
      grade : String,
      cgpa : Number,
      year_of_accreditation : Number,
      validity : Number
    },
    third_cycle : {
      grade : String,
      cgpa : Number,
      year_of_accreditation : Number,
      validity : Number
    },
    fourth_cycle : {
      grade : String,
      cgpa : Number,
      year_of_accreditation : Number,
      validity : Number
    }
  },

  iqac_establishment_date : Date,
  aqar_of_the_year : String,

  previous_aqar_submissions : {
    prev_aqar_submission1 : {
      aqar_year : String,
      aqar_date : Date
    },
    prev_aqar_submission2 : {
      aqar_year : String,
      aqar_date : Date
    },
    prev_aqar_submission3 : {
      aqar_year : String,
      aqar_date : Date
    },
    prev_aqar_submission4 : {
      aqar_year : String,
      aqar_date : Date
    }
  },

  institutional_status : {   //Option Based Answering
    university : {
      state : Number,
      central : Number,
      deemed : Number,
      private_uni : Number
    },
    affliated_college : {
      yes1 : Number,
      no1 : Number
    },
    constituent_college : {
      yes2 : Number,
      no2 : Number
    },
    autonomous_college_of_ugc : {
      yes3 : Number,
      no3 : Number
    },
    regulatory_agency_approved_institute : {
      yes4 : Number,
      no4 : Number
    },
    type_of_institution1 : {
      co_ed : Number,
      men : Number,
      women : Number
    },
    type_of_institution2 : {
      urban : Number,
      rural : Number,
      tribal : Number
    },
    financial_status : {
      grant_in_aid : Number,
      ugc_2f : Number,
      ugc_12b : Number,
      grant_in_aid_plus_self_finance : Number,
      totally_self_finance : Number
    }
  },

  faculty_and_programme_type : {   //Option Based Answering
    arts : Number,
    science : Number,
    commerce : Number,
    law : Number,
    pei : Number,
    tei : Number,
    engineering : Number,
    health_science : Number,
    management : Number,
    others : String
  },

  affliating_uni_name : String

  special_status : {
    state_cental_govt_uni_autonomy : String,
    uni_with_potential_for_exellence : String,
    ugc_cpe : String,
    ugc_ce : String,
    dst_star_scheme : String,
    dst_fist : String,
    ugc_special_assistance_program : String,
    ugc_innovative_pg_program : String,
    ugc_cop : String,
    any_other : String
  }

  retainKeyOrder : true
});

let PartA1 = module.exports = mongoose.model('PartA1', PartA1Schema, 'part_a');
