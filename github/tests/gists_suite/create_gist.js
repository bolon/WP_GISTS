module.exports = {
  //todo : create this in a predefined function to minimize code lines / before each of test
  'Do Login': function(client) {
    var user_id = client.globals.github_id.user_id;
    var password = client.globals.github_id.password;
    //login first
    var login_page = client.page.login();    
    login_page.do_login(user_id, password);
  },
  
  'Create Gist' : function(client) {
    var predefined_text = client.globals.github_text;
    var gist_editor_page = client.page.gists.gist_editor();
    gist_editor_page.navigate();
    gist_editor_page.expect.element('@gist_description_field').to.be.visible;
    gist_editor_page.expect.element('@gist_file_name_field').to.be.visible;
    gist_editor_page.expect.element('@gist_file_content_field').to.be.visible;
    gist_editor_page.expect.element('@gist_creation_dropdown').to.be.visible;
    
    gist_editor_page
      .setValue('@gist_description_field', predefined_text.file_description)
      .setValue('@gist_file_name_field', predefined_text.file_name)
      .setValue('@gist_file_content_field', predefined_text.file_content)
      .click('@gist_creation_dropdown')
      .click('@gist_create_public_button')
      .click('@gist_submit_button');
  },
  
  //todo: assertion should also check the url
  'Assert gist is created' : function(client) {
    var gist_detail_page = client.page.gists.detail_gist();
    gist_detail_page.expect.element('@edit_button').to.be.visible;
  }
}