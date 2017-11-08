import Page from './page';

class KeystonePage extends Page {
  get email() { return browser.element('[name=email]'); }
  get password()  { return browser.element('[name=password]'); }
  get submitbtn() { return browser.element('button[type=submit]'); }
  open() {
    super.open('http://demo.keystonejs.com/keystone/signin');
  }
}

module.exports = new KeystonePage();