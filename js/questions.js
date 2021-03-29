var quizQuestions = {
    position: 0,
    list: [
       
        {
            question: "What is the format called that is used for storing and transporting data?",
            choices: [
                "HTML",
                "STORE",
                "FONT",
                "JSON"
            ],
            answer: 3
        },
        {
            question: "In JavaScript, what element is used to store and manipulate text?",
            choices: [
                "Variables",
                "Strings",
                "Functions",
                "Arrays"
            ],
            answer: 1
        },
        {
            question: "In JavaScript, what element is used to store multiple values in a single variable?",
            choices: [
                "Functions",
                "Variables",
                "Strings",
                "Arrays"
            ],
            answer: 3
        },
        {
            question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
            choices: [
                "Functions",
                "Arrays",
                "Strings",
                "Variables"
            ],
            answer: 0
        },
        {
            question: "What is the CSS property that sets the size of the whitespace outside the borders of the content?",
            choices: [
                "Margin",
                "Padding",
                "Boarder",
                "Spacer"
            ],
            answer: 0
        },
        {
            question: "What are the CSS properties that are used to add space around sections of content?",
            choices: [
                "Spacer",
                "Boarder",
                "Padding",
                "Margin"
            ],
            answer: 2
        },
        {
            question: "External stylesheets are stored in what type of files?",
            choices: [
                ".ENV",
                ".CSS",
                ".JS",
                ".HTML"
            ],
            answer: 1
        },
    ],
    reset: function() {

        this.setPosition(0);

    },
    isComplete: function() {

        return this.position === this.list.length;

    },
    setPosition: function( position ) {

        this.position = position;

    },
    getCurrent: function() {

        if( this.isComplete() ) return false;

        return this.list[this.position];

    },
    getNext: function() {

        if( this.isComplete() ) return false;

        this.position++;

        return this.getCurrent();

    }
}