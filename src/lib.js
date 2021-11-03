/**
MIT License

Copyright (c) 2020-2022 litt1e-p

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
var emp = function (esm, limit = 0) {
  if (!this._vd(limit)) {
    throw new TypeError('the variable of limit should be integer')
  }
  if (!this._evd(esm)) {
    throw new ReferenceError('vue environment should be established')
  }
  if (limit < 0) {
    return
  }
  this._lt = limit, this._pch(esm)
}

emp.prototype._pch = function (e) {
  const ts = ['success', 'error', 'info', 'warning']
  ts.map(i => this._ech.apply(this, [e, i]))
}

emp.prototype._ech = function (m, t) {
  const t$ = m.prototype.$message[t]
  const lt = +this._lt
  m.prototype.$message[t] = function () {
    let ps = arguments
    if (arguments.length && arguments.length > 0 && typeof arguments[0] === 'string') {
      ps = arguments[0].length >= lt ? [{ showClose: true, duration: 0, message: arguments[0] }] : ps
    } else if (arguments.length && arguments.length > 0 && typeof arguments[0] === 'object' && arguments[0].hasOwnProperty('message')) {
      ps = arguments[0]['message'].length >= lt ? [Object.assign({ ...arguments[0] }, { showClose: true, duration: 0, message: arguments[0]['message'] })] : [Object.assign({ ...arguments[0] }, { duration: 3000, message: arguments[0]['message'] })]
    }
    return t$.apply(this, ps)
  }
}

emp.prototype._evd = function (e) {
  return e && e.prototype.$message && typeof e.prototype.$message === 'function'
}

emp.prototype._vd = function (v) {
  return /^\-?\d+$/gi.test(v)
}

export default emp
