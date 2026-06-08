describe('setDefaults', () => {
  it('should be a static method', () => {
    expect(PixSqueeze.setDefaults).to.be.a('function');
  });

  it('should change the global default options', (done) => {
    PixSqueeze.setDefaults({
      strict: false,
    });

    window.loadImageAsBlob('/base/docs/images/picture.png', (image) => {
      new PixSqueeze(image, {
        quality: 1,
        success(result) {
          expect(result).to.not.equal(image);

          // Reverts it for the rest test suites
          PixSqueeze.setDefaults({
            strict: true,
          });
          done();
        },
      });
    });
  });
});
