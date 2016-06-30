$(document).ready(function(){
var provider = new firebase.auth.FacebookAuthProvider();
var source   = $("#user-template").html();
var template = Handlebars.compile(source);


$('#login').click(function(){firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user.displayName)
  console.log(user)

  var displayUser = {
    name: user.displayName,
    picture: user.photoURL,
    email: user.email}

  var html = template(displayUser)

  console.log(html)
 
  $('#test').replaceWith(html)

 var database = firebase.database()


$('#submit').click(function writeUserData(userID, name, email) {
  console.log('click')
  var userID = user.uid
   var appUserName = $('#name').val()
    var appEmail = $('#email').val()
  database.ref('users/' + userID).set({
    username: appUserName,
    email: appEmail
  })
  $('#name').val('')
  $('#email').val('')

  })
$('#delete').click(function removeUserData(userID){
  var userID = user.uid
  database.ref('users/' + userID).remove()
})

$('#logout').click(function signOut(){
  firebase.auth().signOut().then(function() {
  console.log('signed out')
}, function(error) {
  // An error happened.
})
});

})


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




  // create object instance of my Firebase database




})
//  var sourceTemplate = $('#list-template').html();
//   var templateMessages = Handlebars.compile(sourceTemplate);

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

//       var templateHTML = templateMessages(data);

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
// })
