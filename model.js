const rp = require('request-promise-native');

function Model (koop) {}

Model.prototype.getData = function (req, callback) {
  const keyword = req.params.host;
  const inTone = req.params.id;

  let tone = '>';
  let toneValue = '5';

  if (inTone) {
    const splits = inTone.split(':');
    if (splits[0] && splits[0] === 'less') {
      tone = '<';
    }

    if (splits[1] && !isNaN(parseFloat(splits[1]))) {
      toneValue = splits[1];
    }
  }

  const uri = `https://api.gdeltproject.org/api/v2/geo/geo?query=${keyword} tone${tone}${toneValue}&format=imagegeojson`;

  const params = {
    uri,
    method: 'GET',
    json: true
  };

  rp(params)
    .then(response => {
      if (response) {
        response.ttl = 900; // store in-memory for 15 minutes
        response.metadata = {
          name: 'GDELT',
          description: 'Koop Provider that pulls data from the last 24 hours from the GDELT API'
        };
        callback(null, response);
      }
    })
    .catch(error => {
      return callback(error);
    });
};

module.exports = Model;
