 $.getScript('quizSystem.js')
 
    var pos = 0, test, test_status, question, sections, choice, choices, chA, chB, chC, chD, correct = 0;
    var questions = new Array();
    var questions1 = [
        ["What did the British passenger ship Titanic hit, causing it to sink?",
        "A white whale",
        "A submarine",
        "Volcanic rocks",
        "An Iceberg",
        "D"
        ],
        ["The British rule over India ended in what year?",
        "1947",
        "1962",
        "1950",
        "1936",
        "A"
        ],
        ["What nationality was the explorer James Cook?",
        "British",
        "Dutch",
        "Australian",
        "American",
        "A"
        ],
        ["Who was President of Cuba during the Cuban Revolution (1953-1959)?",
        "Fulgencio Batista",
        "Che Guevara",
        "Camilo Cienfuegos",
        "Fidel Castro",
        "A"
        ],
        ["Which spacecraft exploded on take-off in January 1986?",
        "Challenger",
        "Enterprise",
        "Mercury",
        "Discovery",
        "A"
        ],
        ["In 1995, terrorists attacked the Tokyo subway, using a deadly gas. What is the name of the gas?",
        "Cyanogen chloride",
        "Tabun",
        "Cyanide",
        "Sarin",
        "D"
        ],
        ["What did United Kingdom hand over to the People's Republic of China in 1997?",
        "Basra",
        "Singapore",
        "Hong Kong",
        "Macau",
        "C"
        ],
        ["Who was the first female Prime Minister of Australia?",
        "Julia Gillard",
        "Fiona Scott",
        "Tanya Plibersek",
        "Julie Bishop",
        "A"
        ],
        ["Who was the U.S. President behind the New Deal reform program that would end the Depression?",
        "Calvin Coolidge",
        "Woodrow Wilson",
        "Harry S. Truman",
        "Franklin D. Roosevelt",
        "D"
        ],
        ["World War I began in which year?",
        "1923",
        "1938",
        "1917",
        "1914",
        "D"
        ],
        ["Adolf Hitler was born in which country?",
        "France",
		"Germany",
		"Austria", 
		"Hungary", 
		"C"     
        ],
        ["John F. Kennedy was assassinated in",
        "1973", 
		"Austin", 
		"Dallas",
		"1958",
        "C"         
        ],
        ["American involvement in the Korean War took place in which decade?",
        "1970s", 
		"1950s", 
		"1920s",
		"1960s",
        "B"       
        ],
        ["The Hundred Years War was fought between what two countries?",
        "Italy and Carthage", 
		"England and Germany",
		"France and England",
		"Spain and France",
        "C"       
        ],
        ["Brazil was once a colony of which European country?",
        "Portugal",
        "England",
        "France",
        "Spain",
        "A"       
        ],
        ["Who is known as the father of Modern Medicine?",
        "Euclid",
		"Pythagoras",
		"Hippocrates",
		"Erastosthenes",
        "C"       
        ],
        ["Rome was founded around?",
        "1000 BC",
		"1200 BC",
		"1400 BC",
		"1600 BC",
        "A"       
        ],
        ["Who was the first to sail round the world?",
        "Francis Drake",
		"Columbus",
		"Vasco da Gama",
		"Magellan",				
        "D"       
        ],
        ["Who discovered North Pole?",
        "Captain James",
		"Robert Peary",
		"Magellan",
		"Amundsen",
        "B"       
        ],
        ["French Revolution was started in the Year?",
        "1786",
		"1787",
		"1788",
		"1789",
        "D"       
        ]
        
    ];
	var questions2 = [
        ["The Summer Olympics has been hosted by all of these cities, except:",
        "St. Louis, United States",
        "Atlanta, United States",
        "Los Angeles, United States",
        "San Francisco, United States",
        "D"
        ],
        ["In what sports would a player warm up in an area known as the bullpen?",
        "Swimming",
        "Tennis",
        "Golf",
        "Baseball",
        "D"
        ],
        ["In 1969, Boris Spassky became World Champion in what?",
        "Chess",
        "Wrestling",
        "Ice Hockey",
        "High jump",
        "A"
        ],
        ["Los Angeles Lakers is an American team in what sport?",
        "American football",
        "Baseball",
        "Basketball",
        "Hockey",
        "C"
        ],
        ["The FIFA World Cup in men's soccer has been played 19 times since 1930. Which is the only country that has participated in every tournament?",
        "Argentina",
        "Brazil",
        "Germany",
        "England",
        "B"
        ],
        ["Babe Ruth was an American athlete active in which sport?",
        "Baseball",
        "Basketball",
        "Skating",
        "Ice hockey",
        "A"
        ],
        ["In what kind of game is the goal to reduce a fixed score, commonly 501 or 301, to zero?",
        "Snowboarding",
        "Figure skating",
        "Darts",
        "Lacrosse",
        "A"
        ],
        ["In which country was tennis player Steffi Graf born?",
        "Germany",
        "United States",
        "Czech Republic",
        "Russia",
        "A"
        ],
        ["Which American tournament is always held in Augusta, Georgia?",
        "Stanley Cup",
        "US Masters",
        "Rogers Cup",
        "World Series",
        "B"
        ],
        ["Paavo Nurmi was a middle- and long-distance runner from which country?",
        "Poland",
        "Finland",
        "Sweden",
        "Australia",
        "B"
        ],
        ["When ancient Olympic games first held?",    
        "776 BC",
		"780 BC",
		"790 BC",
		"800 BC",
		"A" 
        ],
        ["Which is the national sport of Canada?",    
        "Lacrosse/Ice hockey",
		"Cricket",
		"Field hockey",
		"Volleyball",
		"A"   
        ],
        ["Archery is the national sport of which country?",
        "Afghanistan",
		"Bhutan",
		"Japan",
		"India",
        "B"       
        ],
        ["Football World Cup has been won by which country for the maximum number of times?",
        "Italy",
		"Uruguay",
		"West Germany",
		"Brazil",
        "D"       
        ],
        ["In 1924 the first winter Olympics was held in ",
		"Italy",
		"France", 
		"Austria",
		"Canada",
        "B"       
        ],
        ["What is the national game of England?",
        "Cricket",
        "Football",
        "Tennis",
        "Hockey",
        "A"       
        ],
        ["Up to, and including, the 2008 Beijing Olympics, which of the following sports had not been included in any of the official modern Games?",
         "Golf",
		 "Croquet",
		 "Water skiing",
		 "Cricket",
        "C"       
        ],
        ["There are some very strange sports that happen in various parts of the world. Which one of the listed events is not a real one?",
         "Bog snorkeling",
		 "Elephant polo",
		 "Llama wrestling",
		 "Lawn mower racing",
        "C"       
        ],
        ["In the game of tennis, which of the following is not a type of playing surface?",
         "Grass",
		 "Softcourt",
		 "Hardcourt",
		 "Clay",
        "B"       
        ],
        ["In the game of cricket, from which wood are the bats traditionally made?",
         "Willow",
		 "Beech",
		 "Oak",
		 "Ash",
        "A"       
        ]
    ];

    function _(x) {
        return document.getElementById(x);
    }
    
    //select a test
    function chooshingSection() {
    test = _("test");
    _("test_status").innerHTML =  "<h2>Choose a quiz </h2>";   
    test.innerHTML = "<h3>What subject would you like to choose?<h3>";
    test.innerHTML += "<input type='radio' name='sections' value = 'H'> History <br>";
    test.innerHTML += "<input type='radio' name='sections' value = 'S'> Sports <br><br>";
    test.innerHTML += "<button class='button' onclick='checkSection()'>Submit Answer</button>";
    }
    
    function checkSection() {
    	sections = document.getElementsByName("sections");
        if(sections[0].checked)  {
        	shuffleArray(questions1);
        } else if(sections[1].checked) {
        	shuffleArray(questions2);
        } else {
        	return;
        }
        
        renderQuestion();
    }    

    function shuffleArray(q) {
        for (var i = 0; i < 10; i++) {
            var rnum = i*2 + Math.floor(Math.random() * 2);
            questions.push(q[rnum]);
        }
    }
    
	function goQuizSelect(){ 
	   window.location.href="quiz.html" 
	}    

    function renderQuestion() {
        test = _("test");
        if(pos >= 10){
        	var user = JJquiz.getUser();
            if (correct >= 8) {
                test.innerHTML = "<h2 style=\"color:blue;\">"+ user.firstName +" got "+correct+ " of 10 questions correct</h2>"
                + "<br> <h3> You have successfully passed the test.<br>You are now certified in History subject.</h3>";
            } else {
                test.innerHTML = "<h2 style=\"color:red;\">" + user.firstName +" got "+correct+ " of 10 questions correct</h2>"
                + "<br> <h3> Unfortunately you did not pass the test.<br>Please try again later! </h3>";
            }
            test.innerHTML += "<button class='button' onclick='goQuizSelect()'>Try again</button>";

            _("test_status").innerHTML = "Test Completed";
            pos = 0;
            correct = 0;
            return false;  // not going to continue.
        }

        _("test_status").innerHTML = "Question " +(pos+1)+" of 10"; // +questions.length;
        question = questions[pos][0];
        chA = questions[pos][1];
        chB = questions[pos][2];
        chC = questions[pos][3];
        chD = questions[pos][4];
        test.innerHTML = "<h3>"+question+"</h3>";
        test.innerHTML += "<input type='radio' name='choices' value = 'A'> "+chA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value = 'B'> "+chB+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value = 'C'> "+chC+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value = 'D'> "+chD+"<br><br>";
        test.innerHTML += "<button class='button' onclick='checkAnswer()'>Submit Answer</button>";
    }
    
    function checkAnswer() {
        choices = document.getElementsByName("choices");
        choice = "";
        for(var i = 0; i < choices.length; i++) {
            if(choices[i].checked) {
                choice = choices[i].value;
            }
        }
        if(choice == ""){
        	return;
        }else if(choice == questions[pos][5]) {
            correct++;                   
        }
        pos++;
        renderQuestion();
    }
        
   window.addEventListener("load", chooshingSection, false);