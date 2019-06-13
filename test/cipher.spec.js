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
    it('debería retornar "H IJKLMNOPQRSTUVWXYZABCDEFG" para "A BCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode(33, "A BCDEFGHIJKLMNOPQRSTUVWXYZ"),'H IJKLMNOPQRSTUVWXYZABCDEFG');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "A BCDEFGHIJKLMNOPQRSTUVWXYZ" para "H IJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,'H IJKLMNOPQRSTUVWXYZABCDEFG'),"A BCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

 });

});
