import test from 'ava';
import { objects } from './esm/objects.mjs';
//console.log(objects);

test('"objects" exists', (t) => {
    t.is(Array.isArray(objects), true),
    t.true(objects.length > 10);
});
/*test('"predicates" exists', t=> {
  t.truthy(friendlyWords.predicates),
  t.is(Array.isArray(friendlyWords.predicates), true),
  t.true(friendlyWords.predicates.length > 10)
});
test('"teams" exists', t=> {
  t.truthy(friendlyWords.teams),
  t.is(Array.isArray(friendlyWords.teams), true),
  t.not(friendlyWords.teams.length, 0)
});
test('"collections" exists', t=> {
  t.truthy(friendlyWords.collections),
  t.is(Array.isArray(friendlyWords.collections), true),
  t.not(friendlyWords.collections.length, 0)
});*/
