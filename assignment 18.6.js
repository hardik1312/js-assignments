'use strict'

/* Create a generator that can throw an exception. */

function* generator() {
    let i = 0;
    while (true) {
      if (i > 5) {
        throw new Error("i is too big!");
      }
      yield i;
      i++;
    }
  }