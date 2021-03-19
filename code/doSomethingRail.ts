function validateAddress(address): boolean {
  return true;
}
function createAddressEntity(addressEntity): {} {
  return {};
}
function sendToAddress(addressEntity): boolean {
  return true;
}

interface Object {
  pipe<TIn, TOut>(fn: (x: TIn) => TOut): TOut;
}

interface Function {
  compose<TStart, TIn, TOut>(fn: (x: TIn) => TOut): (t: TStart) => TOut;
}

Object.prototype.pipe = function (fn) {
  return fn(this);
};

function sendMail(address) {
  const validatedAddress = validateAddress(address);
  const addressEntity = createAddressEntity(validatedAddress);
  const result = sendToAddress(addressEntity);
  return result;
}

function sendMailFn(address) {
  return address
    .pipe(validateAddress)
    .pipe(createAddressEntity)
    .pipe(sendToAddress);
}

const sendEmail = validateAddress
  .compose(createAddressEntity)
  .compose(sendToAddress);

/*const sendEmail = function (address) {
    return sendToAddress(createAddressEntity(validateAddress(address)));
}*/
