import {Byte, OneBits, ZeroBits} from './byte';

describe( 'Byte', () => {

  it('should convert zero bits', () => {
    const subject = new Byte(ZeroBits);
    expect(subject.asInteger()).toEqual(0);
  });
  it('should convert zero bits', () => {
    const subject = new Byte(OneBits);
    expect(subject.asInteger()).toEqual(1);
  });
  it('should convert 31 bits', () => {
    const subject = new Byte([1, 1, 1, 1, 1, 1, 1, 1 ]);
    expect(subject.asInteger()).toEqual(255);
  });
  it('should convert 31 bits', () => {
    const subject = new Byte([0, 1, 1, 1, 1, 1, 1, 1 ]);
    expect(subject.asInteger()).toEqual(127);
  });
  it('should convert 5 bits', () => {
    const result  = Byte.bitsFor(30, 5);
    expect(result).toEqual([1, 1, 1, 1, 0]);
  });
  it('should convert 8 bits', () => {
    const subject = new Byte(Byte.bitsFor(30, 8));
    expect(subject.asInteger()).toEqual(30);
  });
});
