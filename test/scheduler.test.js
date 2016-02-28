var expect = require('chai').expect;
var day = require('../src/scheduler/day.js');
var time = require('../src/scheduler/time.js');
var routine = require('../src/scheduler/routine.js');

describe('day.js',function(){
  it('.isWeekDay should return boolean',function(){
    expect(day.isWeekDay('2016-02-23')).to.equal(true);
    expect(day.isWeekDay('2016-02-27')).to.equal(false);
  })
})

describe('time.js', function(){
  it('.isBetween should return boolean',function(){
    expect(time.isBetween([])).to.equal(true);
  })
})
