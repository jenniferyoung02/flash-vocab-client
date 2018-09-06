'use strict'

const authEvents = require('./auth/events.js')
const userEvents = require('./user/events.js')

$(() => {
  $('.flashcard-container').hide()
  // AUTHENTICATION HANDLERS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#log-out').on('click', authEvents.logOut)
  $('#change-password').on('submit', authEvents.changePassword)
  $('.modal').on('blur', function () {
    $('.message').empty()
  })
  $('.modal').on('blur', function () {
    $('.status').empty()
  })
  $('.flashcard').on('click', userEvents.flipFlashcard)
  $('.sentence').click(function (event) {
    event.stopPropagation()
  })
  $('.glyphicon-arrow-right').on('click', userEvents.nextFlashcard)
  $('.to-stack').on('click', userEvents.saveToMyflashcards)
  $('.my-cards').on('click', userEvents.allMyCards)
  $('.all-cards').on('click', userEvents.allGreCards)
  $('.remove-stack').on('click', userEvents.deleteMyFlashcard)
  $('textarea').on('blur', userEvents.saveMyflashcardSentence)
  $('.glyphicon-pencil').on('click', userEvents.editMySetence)
})
