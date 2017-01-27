
module.exports = {

  attributes: {

    name : {
      type : 'string'
    },

    date : {
      type : 'date'
    },

    open : {
      type : 'float'
    },

    high : {
      type : 'float'
    },

    low : {
      type : 'float'
    },

    close : {
      type : 'float'
    },

    volume : {
      type : 'number'
    }


  },

  beforeValidate: function(values, cb){

    Restapi.find({ where: {
      name : values.name
    }
    }).exec(function foundRestapis( err, restapis){

      if(restapis){
        cb(restapis);
      }

      else {
        next('Does Not Exists!');
      }
    });

  }

};



