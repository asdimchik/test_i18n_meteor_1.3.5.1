/**
 * Created by dkrichilsky on 08/08/2016.
 */
Meteor.publish('posts', function(){
    return Posts.find();
})