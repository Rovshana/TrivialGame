$(document).ready(function(){
  
    //
    let view = $('#quiz-time');
    // time to create questions
let questions = [{
        question: "Which works belongs to the Aagatha Cristie?",
        answers: ["Cards on the table", "How to stop Time.", "Tom Soyer", "King liar"],
        correctAnswer: "Cards on the table"
      }, {
        question: "Which of these is NOT a name of one of the Spice Girls?",
        answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
        correctAnswer: "Fred Spice"
      }, {
        question: "Which city also known as 'Big Apple'?",
        answers: ["London", "Dublin", "New York", "Istanbul"],
        correctAnswer: "New York"
      }, {
        question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
        answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
        correctAnswer: "Nirvana"
      }, {
        question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
        answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
        correctAnswer: "The Lion King"
      }, {
        question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
        answers: ["Dice", "Mirror", "Fresh", "Cab"],
        correctAnswer: "Fresh"
      }, {
        question: "Which works belongs Jack London?",
        answers: ["Martin Edeen", "Piona", "Citadel", "sister carrie"],
        correctAnswer: "Martin Edeen"
      }, {
        question: "What was the name of the principal at Bayside High in Saved By The Bell?",
        answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
        correctAnswer: "Mr.Belding"
      }];

      // varibale which holds our timer
      let timer;

      let game = {
        correct: 0,
        incorrect: 0,
        counter: 120,

        

        countdown: function() {
            game.counter--;
            $("#counter-number").html(game.counter);
            if (game.counter === 0) {
              console.log("TIME UP");
              game.done();
            }
          },
        
          start: function() {
            timer = setInterval(game.countdown, 1000);
        
            $("#crucialDiv").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
        
            $("#start").remove();
        
            for (var i = 0; i < questions.length; i++) {
              view.append("<h2>" + questions[i].question + "</h2>");
              for (var j = 0; j < questions[i].answers.length; j++) {
                view.append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
              }
            }
        
            view.append("<button id='done'>Done</button>");
          },
        
          done: function() {
        
            $.each($("input[name='question-0']:checked"), function() {
              if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            $.each($("input[name='question-1']:checked"), function() {
              if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            $.each($("input[name='question-2']:checked"), function() {
              if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            $.each($("input[name='question-3']:checked"), function() {
              if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            $.each($("input[name='question-4']:checked"), function() {
              if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            $.each($("input[name='question-5']:checked"), function() {
              if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            $.each($("input[name='question-6']:checked"), function() {
              if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            $.each($("input[name='question-7']:checked"), function() {
              if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
              }
              else {
                game.incorrect++;
              }
            });
        
            this.result();
        
          },
        
          result: function() {
        
            clearInterval(timer);
        
            $("#crucialDiv h2").hide();
        
            view.html("<h2>All Done!</h2>");
            view.append("<h3>Correct Answers: " + this.correct + "</h3>");
            view.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            view.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
          }
        };
        
        // CLICK EVENTS
        
        $(document).on("click", "#start", function() {
          game.start();
        });
        
        
        $(document).on("click", "#done", function() {
          game.done();
        });




})