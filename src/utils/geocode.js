const request = require('request') 

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoid2Vic2l0ZTg0IiwiYSI6ImNsMTF2bHRoaDA5dm4zZHJzcWtleTN3eXUifQ.afIKMzELrzx1K0o5OQSWjQ&limit=1'
    request({url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to locaition serviced!', undefined)
        }
        else if (response.body.features.length == 0) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
 }

 module.exports = geocode