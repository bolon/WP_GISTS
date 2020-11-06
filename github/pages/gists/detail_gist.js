module.exports = {
  commands: [
    {
      confirm_delete_prompt: confirm_delete_prompt
    }
  ],
  elements: {
    edit_button: 'a.btn.btn-sm svg.octicon.octicon-pencil',
    delete_button: 'button.btn-danger',
    file_name: 'div a strong.gist-blob-name.css-truncate-target',
    file_description: 'div[itemprop="about"]',
    file_content: 'div table tbody'
  },
};

function confirm_delete_prompt(is_accept){
  if(is_accept)
    this.api.acceptAlert();
  else
    this.api.dismissAlert()
}
