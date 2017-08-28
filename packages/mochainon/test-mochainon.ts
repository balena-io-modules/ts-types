import * as m from 'mochainon';
import * as Promise from 'bluebird';

m.chai.assert(true);
m.chai.expect(
    Promise.delay(10).thenReturn(true)
).to.eventually.equal(true);
