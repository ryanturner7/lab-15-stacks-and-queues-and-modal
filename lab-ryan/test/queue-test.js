'use strict';

const Queue = require('../queue.js');
const expect = require('expect');

describe('Testing Queue methods', () => {
  describe('Testing enqueue', () => {
    it('should return a Queue', () => {
      let myQueue = new Queue();
      expect(typeof myQueue).toBe(typeof {});
    });
    it('should return a Queue with an an enqueued object', () => {
      let myQueue = new Queue();
      let myNameQueued = myQueue.enqueue({name: 'Ryan'});
      expect(JSON.stringify(myNameQueued))
          .toEqual(JSON.stringify({'0':{'name':'Ryan'},'length':1}));
    });
  });
  describe('Testing dequeue', () => {
    it('should dequeue the last item in the queue', () => {
      let myQueue = new Queue();
      let myNameEnqueued = myQueue.enqueue({name: 'Ryan'});
      let myNameDequeued = myNameEnqueued.dequeue();
      expect(myNameDequeued).toEqual({name: 'Ryan'});
      let myNamePopped = myNamePushed.pop();
      expect(JSON.stringify(myNamePopped))
      .toEqual(JSON.stringify({ name: 'Ryan' }));
      expect(JSON.stringify(myStack)).toEqual(JSON.stringify({ 0: { name: 'Hobart' }, length:1 }));
    });
  });
});
