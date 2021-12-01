import test from 'ava';
import { getContinentCode, getContinentName } from '../package/index';

test('Continent Code', (t) => {

  t.is(getContinentCode('SE'), 'EU');
  t.is(getContinentCode('Nl'), 'EU');
  t.is(getContinentCode('dE'), 'EU');
  t.is(getContinentCode('us'), 'NA');
  t.is(getContinentCode('CN'), 'AS');
  t.is(getContinentCode('au'), 'OC');
  t.is(getContinentCode('mg'), 'AF');

  t.pass();
});

test('Continent Name', (t) => {

  t.is(getContinentName('SE'), 'Europe');
  t.is(getContinentName('Nl'), 'Europe');
  t.is(getContinentName('dE'), 'Europe');
  t.is(getContinentName('us'), 'North America');
  t.is(getContinentName('CN'), 'Asia');
  t.is(getContinentName('au'), 'Oceania');
  t.is(getContinentName('mg'), 'Africa');

  t.pass();
});

test('Country code is invalid from getContinentCode', (t) => {

  t.throws(() => getContinentCode('WW'), {
    message: '"WW" is an invalid ISO country code'
  });

  t.pass();
});

test('Country code is invalid from getContinentName', (t) => {

  t.throws(() => getContinentName('WW'), {
    message: '"WW" is an invalid ISO country code'
  });

  t.pass();
});
