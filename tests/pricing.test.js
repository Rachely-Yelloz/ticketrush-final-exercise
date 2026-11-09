const { calcTotal, maxTickets } = require('../js/pricing');

test('two regular tickets cost 724', function () { assertEq(calcTotal(2, false), 724); });
test('two member tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('two student tickets cost 619', function () { assertEq(calcTotal(2, false, true), 619); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(false), 8); });
test('members may buy up to 6', function () { assertEq(maxTickets(true), 6); });
test('invalid quantity returns null for low qty', function () { assertEq(calcTotal(0, false), null); });
test('invalid quantity returns null for over limit', function () { assertEq(calcTotal(9, false), null); });
test('invalid quantity returns null for member over limit', function () { assertEq(calcTotal(7, true), null); });
