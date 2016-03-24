asyncdelay
==========
Returns a promise that resolves after a certain number of milliseconds.

```js
let asink = require('asink')
let asyncDelay = require('asyncdelay')

return asink(function *() {
  yield asyncDelay(1) // 1 ms
  yield asyncDelay(10) // 10 ms
}, this)
```
