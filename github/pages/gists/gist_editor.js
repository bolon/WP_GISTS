module.exports = {
  url: 'https://github.com/gists',
  commands: [{
      update_text_value: update_text_value
    }],
  elements: {
    gist_description_field: 'input[name="gist[description]"]',
    gist_file_name_field: 'input[type="text"][name="gist[contents][][name]"]',
    gist_file_content_field: 'div.CodeMirror-code',
    gist_create_secret_button: 'button[name="gist[public]"][value="0"]',
    gist_create_public_button: 'details-menu > label:nth-child(2) > div > span.select-menu-item-heading',
    gist_update_button: 'button.btn.btn-primary',
    gist_container_text_area: 'div.CodeMirror-lines',
    gist_creation_dropdown: '#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > div > details > summary',
    gist_submit_button: '#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > div > button'
  }
};

function update_text_value(browser, new_value){
  this.click('@gist_container_text_area');
  return this;
}

function select_public_gist(browser) {
  this.click('@gist_creation_dropdown');
}