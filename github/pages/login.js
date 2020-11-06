//define login page and its element
module.exports = {
  url: 'https://github.com/login',
  commands: [{
      do_login: do_login
    }],
  elements: {
    username_field: 'input#login_field',
    password_field: 'input#password',
    button_login: 'input.btn'
  }
};

function do_login(login_id, password){
  this.navigate();
  this.waitForElementVisible('@button_login');
  this.setValue('@username_field', login_id)
    .setValue('@password_field', password)
    .click('@button_login');
  
  return this;
}