describe('noConflict', () => {
  it('should be a static method', () => {
    expect(PixSqueeze.noConflict).to.be.a('function');
  });

  it('should return the PixSqueeze class itself', () => {
    const { PixSqueeze } = window;
    const ImageCompressor = PixSqueeze.noConflict();

    expect(ImageCompressor).to.equal(PixSqueeze);
    expect(window.PixSqueeze).to.be.undefined;

    // Reverts it for the rest test suites
    window.PixSqueeze = ImageCompressor;
  });
});
