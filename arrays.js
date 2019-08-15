var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray()
{
const array = [1]
const newarray = ["foo",...array]
return newarray
}

function destructivelyAddElementToBeginningOfArray()
{
 var array = [1]
 array.unshift('foo')
}

function addElementToEndOfArray()
{
  var array = [1]
var newarray = [...array, "foo"]
}

function destructivelyAddElementToEndOfArray()
{
  var array = [1]
array = [...array, "foo"]
return array
}

function accessElementInArray()
{
  var array = [1]
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray()
{
  var array = [1]
array.shift()
return array
}

function removeElementFromBeginningOfArray()
{
  var array = [1]
array.slice(1)
return array
}

function destructivelyRemoveElementFromEndOfArray()
{
  var array = [1]
array.pop()
return array
}

function removeElementFromEndOfArray()
{
  var array = [1]
newarray.slice(0, array.length -1)
return newarray
}

