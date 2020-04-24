export const ZeroBits = [0, 0, 0, 0, 0, 0, 0, 0];
export const OneBits = [0, 0, 0, 0, 0, 0, 0, 1];

export class Byte {
  bits: Array<number>;

  public static bitsFor(value: number, length: number) {
    const numberBits = Array.from(value.toString(2)).map(each => Number.parseInt(each, 10));
    const leadingBits = Array(length - numberBits.length ).fill( 0);
    const answer =  leadingBits.concat(numberBits);
    return answer;
  }
  public static signedBitsFor(value, length) {
    const signBit = value < 0 ? 1 : 0;
    return [signBit].concat(this.bitsFor(Math.abs(value), length - 1));
  }

  public static from8bitInteger(value) {
    return new Byte(Byte.signedBitsFor(value, 8));
  }

  constructor(bits = ZeroBits) {
    this.bits = bits;
  }
  signBit() {
    return this.bits[0];
  }
  signValue() {
    return this.signBit() === 1 ? -1 : 1;
  }
  absoluteValuBits() {
    return this.bits.slice(1);
  }
  asInteger() {
    return this.absoluteValuBits().reduce( (sum, each, index) => sum + each * 2 ** (6 - index), 0) * this.signValue();
  }

}
