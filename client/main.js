/**
 * Created by dkrichilsky on 08/08/2016.
 */
Meteor.startup(function () {
    Tracker.autorun(function () {
        console.log('Tehere are ' + Posts.find().count() + ' posts');
    });
})