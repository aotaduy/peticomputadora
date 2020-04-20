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
  public static from8bitInteger(value) {
    return new Byte(Byte.bitsFor(value, 8));
  }

  constructor(bits = ZeroBits) {
    this.bits = bits;
  }
  asInteger() {
    return this.bits.reduce( (sum, each, index) => sum + each * 2 ** (7 - index), 0);
  }

}
