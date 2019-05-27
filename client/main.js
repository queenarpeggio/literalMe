import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';

Template.mainBody.helpers({
	allID(){
		return userDB.find({})
	}
})

Template.addBook.events({
	'click .js-save'(event, instance) {
		var author = $('#myModal input[author="author"]').val();
		var title = $('#myModal imput[name="title"]').val();
		var description = $('#myModal input[name="Description"]').val();
		var img = $('#myModal input[name="image"]').val();
		if(img ==undefined || img == ""){
			img="";
		}
		console.log("The name is",name,title);

	}
});
Template.mainBody.events({
	'click .js-edit'(event, instance){
	console.log("edit clicked");
	$('#editModal').modal('show');
	},
	'click .js-like'(event, instance){
		var allID = this._id;
		var numlikes = userDB.findOne({_id: allID}).like;
		if(!numlikes){
			numlikes = 0;
		}
		numlikes= numlikes+1;
		userDB.update({_id:allID}, {$set:{'like':numlikes}});
	},
	'click .js-dislike'(event, instance) {
		var allID = this._id;
		var numdislikes = userDB.findOne({_id: allID}).dislike;
		if(!numdislikes){
			numdislikes = 0;
		}
		numdislikes= numdislikes+1;
		userDB.update({_id:allID}, {$set:{'dislike':numdislikes}})
	},
})