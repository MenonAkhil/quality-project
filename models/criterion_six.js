// Criterion Six

let mongoose = require('mongoose');

//Criterion 6 schema
var criterionSixschema = mongoose.schema({
  info_management_system : String,
  improvement_strategies : {
    curriculum_development : String,
    teaching_and_learning : String,
    exam_and_evaluation : String,
    research_and_development : String,
    physical_infrastructure : String,
    human_resource_management : String,
    industry_interaction_collab : String,
    student_admission : String
  },
  welfare_scheme : {
    teaching : String,
    non_teaching : String,
    students : String
  },
  corpus_fund : String,
  financial_audit : {
    yes1 : Number,
    no1 : Number
  },
  academic_admin_audit : {
    academic : {
      external_yes_no : String,
      external_agency : String,
      internal_yes_no : String,
      internal_agency : String
    },
    administrative : {
      external_yes_no : String,
      external_agency : String,
      internal_yes_no : String,
      internal_agency : String
    }
  },
  result_declaration : {
    ug_programmes : {
      yes2 : Number,
      no2 : Number
    },
    pg_programmes : {
      yes2 : Number,
      no2 : Number
    }
  },
  examination_reforms : String,
  autonomy_promotion : String,
  alumni_activity_support : String,
  parent_teacher_activity_support : String,
  support_staff_development : String,
  eco_friendly_initiatives : String

  retainKeyOrder : true
});

let CriterionSix = module.exports = mongoose.model('CriterionSix', criterionSixschema, 'criterion_six');
