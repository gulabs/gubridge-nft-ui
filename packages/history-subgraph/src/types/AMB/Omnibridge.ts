// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from '@graphprotocol/graph-ts';

export class TokensBridged extends ethereum.Event {
  get params(): TokensBridged__Params {
    return new TokensBridged__Params(this);
  }
}

export class TokensBridged__Params {
  _event: TokensBridged;

  constructor(event: TokensBridged) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get messageId(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class TokensBridgingInitiated extends ethereum.Event {
  get params(): TokensBridgingInitiated__Params {
    return new TokensBridgingInitiated__Params(this);
  }
}

export class TokensBridgingInitiated__Params {
  _event: TokensBridgingInitiated;

  constructor(event: TokensBridgingInitiated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get messageId(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class Omnibridge extends ethereum.SmartContract {
  static bind(address: Address): Omnibridge {
    return new Omnibridge('Omnibridge', address);
  }

  nativeTokenAddress(_bridgedToken: Address): Address {
    let result = super.call(
      'nativeTokenAddress',
      'nativeTokenAddress(address):(address)',
      [ethereum.Value.fromAddress(_bridgedToken)],
    );

    return result[0].toAddress();
  }

  try_nativeTokenAddress(_bridgedToken: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      'nativeTokenAddress',
      'nativeTokenAddress(address):(address)',
      [ethereum.Value.fromAddress(_bridgedToken)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}
