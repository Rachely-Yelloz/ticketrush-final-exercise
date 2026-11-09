const { joinWaitlist } = require('../js/waitlist');

test('joinWaitlist exists and returns an array', function () { assertEq(Array.isArray(joinWaitlist([], 'a@b.co')), true); });
test('trims and lowercases emails', function () { assertEq(joinWaitlist([], '  Dana@Mail.COM '), ['dana@mail.com']); });
test('ignores duplicates', function () { assertEq(joinWaitlist(['a@b.co'], 'A@B.CO'), ['a@b.co']); });
test('ignores invalid emails', function () { const j = joinWaitlist; assertEq(j(['a@b.co'], 'abc'), ['a@b.co']); assertEq(j([], 'abc@def'), []); assertEq(j([], 'abc.def@ghi'), []); });
test('does not mutate input', function () { const original = ['x@y.co']; const out = joinWaitlist(original, 'z@y.co'); assertEq(original.length, 1); assertEq(out.length, 2); assertEq(out !== original, true); });
