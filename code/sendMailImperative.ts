function sendMail(address) {
  const validatedAddress = validateAddress(address);
  if (validatedAddress) {
    const addressEntity = createAddressEntity(validatedAddress);
    if (addressEntity) {
      return sendToAddress(addressEntity);
    }
  }

  return false;
}

module Tet{




export class Option<T> {
}
    
    
    export class Try<T> {

    }
    
    export class Writer<T> {
        

    }
    
}