/*
 *
 * A Decorator is a special kind of declaration that can be
 * attached to a class declaration, method, accessor,
 * property, or parameter. Decorators use the form
 * @expression, where expression must evaluate to a
 * function that will be called at runtime with
 * information about the decorated declaration.
 * */

// to modify their behavior (class declaration/method/accessor/property/parameter) or add metadata to them

@LogClass
class myClass {
  constructor(public name: string) { }

  @RunLog
  run() {
    console.log('run')
  }
}


function LogClass(constructor: Function) {
  console.log(constructor)
}

function RunLog(a: any, b: any, c: any) {
  console.log(a)
  console.log(b)
  console.log(c)
}