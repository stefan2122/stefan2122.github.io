$(document).ready(function(){
var provider = new firebase.auth.FacebookAuthProvider();
var source   = $("#user-name").html();
var template = Handlebars.compile(source);


firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user.displayName)
  console.log(user)

  var displayUserName = {
    name: "hello" }

  var html = template(displayUserName)

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
})
// $('#Login').click(function login(){
// ref.authWithOAuthPopup("google", function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });
// })

// $(document).ready(function() {
//   // create object instance of my Firebase database
//   var myDBReference = new Firebase('https://the-raw-juicery.firebaseio.com/');

//  var sourceTemplate = $('#list-template').html();
//   var template = Handlebars.compile(sourceTemplate);

//   // define submit event listener/handler
//   $('#post').click(function(event) {
//     // prevents page refresh
//     event.preventDefault();

//     // grab user input
//     var message = $('#message').val();

//     //set messagesRerence variable to the database child 'messages'
//     var messagesReference = myDBReference.child('messages');
//     //push messagesReference variable with the property of message equal to the child message
//     messagesReference.push({
//       message: message
//     });
//   });

//   // Read functionality
//   myDBReference.child('messages').on('child_added', function(results) {
//     results.forEach(function(message) {

//       var data = {
//         message: message.val(),
//         id: results.key()
//       };
//       console.log(data)

//       var templateHTML = template(data);

//       var $templateHTML = $(templateHTML);

//       $templateHTML.click(function() {
//         var messageId = $(this).data('id');
//         updateMessage(messageId);
//       })
//       $('#messages-list').append($templateHTML);
//     });
//   });

//   // Update Functionality
//   function updateMessage(id, message) {
//     var messageReference = new Firebase('https://the-raw-juicery.firebaseio.com/messages/' + id);
//     messageReference.update({
//       message: 'fu man shu'
//     });

//   }
//   // Delete functionality

// $('#delete').click(function deleteMessage(id) {

//     var messageReference = new Firebase('https://the-raw-juicery.firebaseio.com/messages/' + id);


//     messageReference.remove();


//   })

// });