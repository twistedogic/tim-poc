var moment = require('moment');
module.exports = {
  isWeekDay:isWeekDay
};

function isWeekDay(input){
  return moment(input).day() < 6;
}
