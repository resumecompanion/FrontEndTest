import KeystonePage from '../../pageobjects/keystone.page';

describe('Demo for keystone user log flow', function() {
  before(function() {
    // iPhone 6, iPhone7
    browser.windowHandleSize({
      width: 375,
      height: 667
    });
  });
  
  beforeEach(function() {
    browser.pause(1000);
  });

  it('login failure', function() {
    KeystonePage.open();
    KeystonePage.email.setValue('demo@keystonejs.com');
    KeystonePage.password.setValue('1111');
    KeystonePage.submitbtn.click();
    browser.waitForExist('.alert_1wamaxc-o_O-danger_i8m9rb');
    const message = browser.getText('.alert_1wamaxc-o_O-danger_i8m9rb');
    message.should.be.equal('The email and password you entered are not valid.');
  });

  it('login successful', function() {
    KeystonePage.open();
    KeystonePage.email.setValue('demo@keystonejs.com');
    KeystonePage.password.setValue('demo');
    KeystonePage.submitbtn.click();
    browser.waitForExist('[href="/keystone/signout"]');
  });

  it('logout', function() {
    browser.click('[href="/keystone/signout"]')
           .waitForExist('.alert_1wamaxc-o_O-info_1lss0us');
  });

});