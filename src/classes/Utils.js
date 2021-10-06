export default {
  initiateObjectFromArgument: function (arg, objectName = '', defaulProp = 'title') {
    // console.log('create ', objectName, ' Object with arg:', arg)
    let object = {}
    switch (typeof arg) {
      case 'object':
        object = arg
        break
      case 'number':
        object[defaulProp] = objectName + ' ' + arg
        break
      default:
        object[defaulProp] = arg
        break
    }
    console.log('create ', objectName, ' Object with arg:', arg, 'data to return:', object)

    return object
  }
}
