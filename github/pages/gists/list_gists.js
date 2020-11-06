const util = require('util');
//define login page and its element
module.exports = {
  commands: [{
      load_gist_list: navigate_to_user_gist,
      select_gist: select_gist
    }],
  elements: {
    gist_link: 'div[class="gist-snippet"] div div div span a:nth-child(2)',
    gist_container: 'div.gist-snippet'
  }
};

function navigate_to_user_gist(user_id){
  this.navigate('https://gist.github.com/' + user_id)
    .waitForElementVisible('@gist_container');
  return this;
}

//select any random gist
//TODO : set random
function select_gist(){
  this.waitForElementVisible('body')
    .click('@gist_link')
    .waitForElementVisible('div.js-gist-file-update-container.js-task-list-container.file-box')
}