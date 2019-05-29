
import { weekdayCalc } from './../src/weekday-calc.js';

describe('weekdayCalc', function() {

  it('it should return name of day of week based on weekdayValue ', function() {
    let date = new Date(2019, 4, 12);
    console.log(date);
    console.log(date.getDay());
    expect(weekdayCalc(date)).toEqual("Sunday");
  });
});
