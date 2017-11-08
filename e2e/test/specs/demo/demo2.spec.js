describe('Demo for chimp on google page', () => {
  it('title should be google @watch', () => {
    browser.url('http://google.com');
    browser.getTitle().should.be.equal('Google');
    browser.element('input#lst-ib.gsfi').setValue('Taroko Software');
    browser.submitForm('#tsf');
  });
});