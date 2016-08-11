/**
 * Created by dkrichilsky on 05/08/2016.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});

