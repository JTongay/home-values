const expect = require('chai').expect
const doIt = require('../problem')

describe('The Problem', function () {
 it('should solve the problem', function () {

   const result = doIt([5,3], [188930, 194123, 201345, 154243, 154243]);
   expect(result).to.equal(undefined)


 })
 xit('should solve the problem', function () {

   const result = doIt([20,4], [188930, 194123, 201345, 154243, 154243, 182847, 192847, 103948, 102395, 198436, 152736, 173524, 174635, 183746, 174532, 123463, 123212, 123874, 176257, 187267]);
   expect(result).to.equal(undefined)


 })
 xit('should solve the problem with a big number', function (done) {

   var bigArr = Array.apply(null, {length: 50000}).map(function(a){
     return Math.round(Math.random()*100000) + 1
   })
   console.log(bigArr);
   const result = doIt([50000,10000], bigArr);
  //  const result = undefined
   expect(result).to.equal(undefined)
   done()

 })
})
