var UndergroundSystem = function() {
    this.checkInHash = {};
    this.hash = {};

};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInHash[id] = {
        stationName,
        t
    }

};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const checkInData = this.checkInHash[id];
    const stationKey = checkInData.stationName + '-' + stationName;
    const newTime = t - checkInData.t;
    if (this.hash[stationKey]) {
        const existingData = this.hash[stationKey];
        existingData.avg = (existingData.avg * existingData.total + newTime) / (existingData.total + 1)
        existingData.total = existingData.total + 1;
    } else {
        this.hash[stationKey] = {
            total: 1,
            avg: newTime
        }
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const data = this.hash[`${startStation}-${endStation}`];
    return data.avg
};
