/**
 * Created by dkrichilsky on 05/08/2016.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function (userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});