module.exports = {
  //todo : create this in a predefined function to minimize code lines / before each of test
  'Do Login': function(client) {
    var user_id = client.globals.github_id.user_id;
    var password = client.globals.github_id.password;
    //login first
    var login_page = client.page.login();    
    login_page.do_login(user_id, password);
    //Go to user gists and select any gist
    var gists_page = client.page.gists.list_gists();
    gists_page.load_gist_list(user_id).select_gist();
  },
  
  'As a user, I want to edit an existing gist.' : function(client) {
    var predefined_text = client.globals.github_text
    //Click edit
    var detail_gist_page = client.page.gists.detail_gist();
    detail_gist_page.click('@edit_button');
    
    //do field checking here after creation
    var gist_editor_page = client.page.gists.gist_editor();
    gist_editor_page
      .clearValue('@gist_description_field')
      .setValue('@gist_description_field', predefined_text.file_description_updated)
      .clearValue('@gist_file_name_field')
      .setValue('@gist_file_name_field', predefined_text.file_name_updated)
      .setValue('@gist_file_content_field', predefined_text.file_content_updated);

    gist_editor_page.click('@gist_update_button');
    
    detail_gist_page.expect.element('@file_name').text.to.contain(predefined_text.file_name_updated)
    detail_gist_page.expect.element('@file_description').text.to.contain(predefined_text.file_description_updated)
    //todo : assertion if textcontent is correctly updated.
    //detail_gist_page.expect.element('@file_content').text.to.contain(predefined_text.file_content_updated)
  }
}