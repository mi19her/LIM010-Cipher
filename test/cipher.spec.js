describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert.equal(cipher.encode(33,'abcdefghijklmnopqrstuvwxyz'),"hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "H IJKLMNOPQRSTUVWXYZABCDEFG" para "A BCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode(33, "A BCDEFGHIJKLMNOPQRSTUVWXYZ"),'H IJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "6789012345" para "1234567890" con offset 15',()=>{
      assert.equal(cipher.encode(15, "1234567890"),'6789012345');
    });
  });
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
      assert.equal(cipher.decode(33,'hijklmnopqrstuvwxyzabcdefg'),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "A BCDEFGHIJKLMNOPQRSTUVWXYZ" para "H IJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,'H IJKLMNOPQRSTUVWXYZABCDEFG'),"A BCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "1234567890" para "6789012345" con offset 15',()=>{
      assert.equal(cipher.decode(15, "6789012345"),'1234567890');
    });
 });
});
