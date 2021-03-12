function log(item: any) {}
function someFunction() {}

function doSomethingT() {
  try {
    const result = someFunction();
    log(result);
  } catch (error) {
    log(error);
  }
}

function doSomething() {
  try {
    const result = someFunction();
    log(result);

    try {
      const result = someFunction();
      log(result);
      try {
        const result = someFunction();
        log(result);
      } catch (error) {
        //OH NO!!
        return false;
      }
    } catch (error) {
      //OH NO!!
      return false;
    }
  } catch (error) {
    //OH NO!!
    return false;
  }

  try {
    const result = someFunction();
    log(result);
  } catch (error) {
    //OH NO!!
    return false;
  }

  try {
    const result = someFunction();
    log(result);
  } catch (error) {
    //OH NO!!
    return false;
  }
}
