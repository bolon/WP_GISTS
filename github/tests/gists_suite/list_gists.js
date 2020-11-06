module.exports = {
  'As a user, I want to see my list of public gists.' : function(client) {
    var user_id = client.globals.github_id.user_id;
    //Go to user gists
    var gists_page = client.page.gists.list_gists();
    gists_page.load_gist_list(user_id);
  }
}