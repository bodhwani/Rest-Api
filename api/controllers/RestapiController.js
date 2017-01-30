
var index = 0;

module.exports = {

  'new' : function (req, res) {
    res.view();

  },

  create : function(req, res, next) {

    Restapi.create(req.params.all(), function (restapis) {

      if (index !== restapis.length) {
        return res.json({
          'message' : 'Successfully collecting ' +restapis.length+' values',
          'collection' : restapis
        });
      }
      else {
        return res.json({'message' : 'Oops! It seems that data does not exists. Please try for GOOG , FB , AMZN , MSFT , AAPL , CSCO  etc'});
      }

    });
  }



};

