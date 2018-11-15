$(document).ready(function () {
    console.log("ready!");

    var StartFresh = function () {
        // variabbles ////////////////////////////////////////////////////////////////////////////////////////////
        // Character List//////
        var char1 = {

            Health: 100,
            Stregth: 15,
            type: "water",
            isDead: false,

            picture: "./assets/images/sprites/0253.png",
            pLevel1: "./assets/images/sprites/0253.png",
            pLevel2: "./assets/images/sprites/0254.png",
            pLevel3: "./assets/images/sprites/0255.png",

        };
        var char2 = {

            Health: 100,
            Stregth: 15,
            type: "fire",
            isDead: false,

            picture: "./assets/images/sprites/0356.png",
            pLevel1: "./assets/images/sprites/0356.png",
            pLevel2: "./assets/images/sprites/0357.png",
            pLevel3: "./assets/images/sprites/0358.png",

        };
        var char3 = {

            Health: 100,
            Stregth: 15,
            type: "grass",
            isDead: false,

            picture: "./assets/images/sprites/0250.png",
            pLevel1: "./assets/images/sprites/0250.png",
            pLevel2: "./assets/images/sprites/0251.png",
            pLevel3: "./assets/images/sprites/0252.png",

        };
        var char4 = {

            Health: 100,
            Stregth: 15,
            type: "wind",
            isDead: false,

            picture: "./assets/images/sprites/0247.png",
            pLevel1: "./assets/images/sprites/0247.png",
            pLevel2: "./assets/images/sprites/0248.png",
            pLevel3: "./assets/images/sprites/0249.png",

        };
        //   Character List End ///////
        var charChosen = "";
        var oppChosen = "";
        var opponents = [];
        var eleminations = 0;
        var enemiesLeft = 3;
        var powerUpLevel = 0;

        // variabbles End ///////////////////////////////////////////////////////////////////////////////////


        // functions /////////////////////////////////////////////////////////////////////////////////////////

        var chooseAnother = function () {

            if (enemiesLeft > 1) {
                enemiesLeft--;
                console.log("enemies Lefts: " + enemiesLeft);
                $('#opponentPage').removeClass("hide");
                $('#battlePage').addClass("hide");

                // power up after every elimination
                if (eleminations < 2) {
                    eleminations++;
                    console.log("PowerUP");
                    console.log(eleminations);
                    charChosen.Health += 20;
                    charChosen.Stregth += 20;
                    $('#charHealth').css('width', charChosen.Health + '%');
                    $('#charHealthB').css('width', charChosen.Health + '%');
                    $('#charHealth').text(' Health:' + charChosen.Health);
                    $('#charHealthB').text(' Health:' + charChosen.Health);
                }


                for (i = 0; i < opponents.length; i++) {
                    if (!opponents[i].isDead) {
                        $("#opponent" + i).attr("src", opponents[i].picture);
                    } else if (opponents[i].isDead) {
                        $('#opponent' + i).addClass("hide");
                    }

                }
            } else {
                // You win The Game 
                console.log("You Win!");
                gameWon();
            }

        }

        var gameLost = function () {
            $("#fightContainer").addClass("hide");
            $('#resultContainer').removeClass("hide");
            $('#result').text("! You Loose !");

        }

        var gameWon = function () {
            $("#fightContainer").addClass("hide");
            $('#resultContainer').removeClass("hide");
            $('#result').text("! You Win !");

        }


        var updateStats = function () {

            if (charChosen.Health < 0) {
                charChosen.Health = 0;
                gameLost();
                // Game Lost 
            }
            if (oppChosen.Health < 0) {
                oppChosen.Health = 0;
                oppChosen.isDead = true;
                chooseAnother();

            }
            // if (charChosen.Health > 0 && oppChosen.Health > 0){

            $('#charHealth').css('width', charChosen.Health + '%');
            $('#charHealthB').css('width', charChosen.Health + '%');
            $('#oppHealthB').css('width', oppChosen.Health + '%');
            $('#charHealth').text(' Health:' + charChosen.Health);
            $('#charHealthB').text(' Health:' + charChosen.Health);
            $('#oppHealthB').text(' Health:' + oppChosen.Health);
            $('#charImg').attr('src', charChosen.picture);
            $('#charImgB').attr('src', charChosen.picture);
            $('#oppImgB').attr('src', oppChosen.picture);

            // }
        }

        var dealDamagechar = function () {

            if ((charChosen.type == "water") && (oppChosen.type == "fire")) {

                oppChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);




            } else if ((charChosen.type == "water") && (oppChosen.type == "wind")) {
                oppChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);


            } else if ((charChosen.type == "fire") && (oppChosen.type == "grass")) {

                oppChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);



            } else if ((charChosen.type == "fire") && (oppChosen.type == "water")) {
                oppChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);


            } else if ((charChosen.type == "grass") && (oppChosen.type == "wind")) {

                oppChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);



            } else if ((charChosen.type == "grass") && (oppChosen.type == "fire")) {
                oppChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);


            }
            else if ((charChosen.type == "wind") && (oppChosen.type == "water")) {

                oppChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);



            } else if ((charChosen.type == "wind") && (oppChosen.type == "grass")) {
                oppChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);


            } else {
                oppChosen.Health -= charChosen.Stregth;


            }

            updateStats();
        }
        var dealDamageOpp = function () {
            if ((charChosen.type == "water") && (oppChosen.type == "fire")) {


                charChosen.Health -= oppChosen.Stregth - (oppChosen.Stregth * .50);



            } else if ((charChosen.type == "water") && (oppChosen.type == "wind")) {

                charChosen.Health -= oppChosen.Stregth + (oppChosen.Stregth * .50);

            } else if ((charChosen.type == "fire") && (oppChosen.type == "grass")) {


                charChosen.Health -= oppChosen.Stregth - (oppChosen.Stregth * .50);


            } else if ((charChosen.type == "fire") && (oppChosen.type == "water")) {

                charChosen.Health -= oppChosen.Stregth + (oppChosen.Stregth * .50);

            } else if ((charChosen.type == "grass") && (oppChosen.type == "wind")) {


                charChosen.Health -= oppChosen.Stregth - (oppChosen.Stregth * .50);


            } else if ((charChosen.type == "grass") && (oppChosen.type == "fire")) {

                charChosen.Health -= oppChosen.Stregth + (oppChosen.Stregth * .50);

            }
            else if ((charChosen.type == "wind") && (oppChosen.type == "water")) {


                charChosen.Health -= oppChosen.Stregth - (oppChosen.Stregth * .50);


            } else if ((charChosen.type == "wind") && (oppChosen.type == "grass")) {

                charChosen.Health -= oppChosen.Stregth + (oppChosen.Stregth * .50);

            } else {

                charChosen.Health -= oppChosen.Stregth;

            }
            updateStats();
        }

        var goToOppenent = function () {

            console.log('char Chosen: ' + charChosen)
            $('#start').addClass("hide");
            $('#opponentPage').removeClass("hide");

            for (i = 0; i < opponents.length; i++) {

                $("#opponent" + i).attr("src", opponents[i].picture);

            }
            updateStats();
        }

        var goToBattle = function () {

            console.log('opponent: ' + charChosen)
            $('#opponentPage').addClass("hide");
            $('#battlePage').removeClass("hide");
            updateStats();

        }

        // Functions End//////////////////////////////////////////////////////////////////////////////////////

        // Clicks ////////////////////////////////////////////////////////////////////////////////////////

        $('#c1').click(function () {
            charChosen = char1;
            opponents = [char2, char3, char4];
            goToOppenent();
        });

        $('#c2').click(function () {
            charChosen = char2;
            opponents = [char1, char3, char4];
            goToOppenent();
        });

        $('#c3').click(function () {
            charChosen = char3;
            opponents = [char1, char2, char4];
            goToOppenent();
        });

        $('#c4').click(function () {
            charChosen = char4;
            opponents = [char1, char2, char3,];
            goToOppenent();
        });
        /////////////////////////////////////
        $('#opponent0').click(function () {
            oppChosen = opponents[0];
            goToBattle();
        });

        $('#opponent1').click(function () {
            oppChosen = opponents[1];
            goToBattle();
        });

        $('#opponent2').click(function () {
            oppChosen = opponents[2];
            goToBattle();
        });
        ////////////////////////////////////
        $('#fight').click(function () {
            dealDamagechar();
            dealDamageOpp();
        });

        $('#powerUP').click(function () {

            console.log("Clicked");
            if (powerUpLevel < 2) {
                if (powerUpLevel == 0){
                    charChosen.picture = charChosen.pLevel2;
                }
                if (powerUpLevel == 1){
                    charChosen.picture = charChosen.pLevel3;
                }
                powerUpLevel++;
                charChosen.Health += 15;
                charChosen.Stregth += 15;
                
                dealDamageOpp();
            } else {
                $('#powerUpText').text("Max Level Reached");
            }

        });

        $('#newGame').click(function () {
            $("#fightContainer").removeClass("hide");
            $('#resultContainer').addClass("hide");
            $('#opponentPage').addClass("hide");
            $('#battlePage').addClass("hide");
            $('#start').removeClass("hide");
            $('#opponent0').removeClass("hide");
            $('#opponent1').removeClass("hide");
            $('#opponent2').removeClass("hide");
            $('#powerUpText').text(" Power Up");

            charChosen = "";
            oppChosen = "";
            opponents = [];
            eleminations = 0;
            enemiesLeft = 3;
            powerUpLevel = 0;

            charChosen.picture = charChosen.pLevel1;

            char1 = {

                Health: 100,
                Stregth: 15,
                type: "water",
                isDead: false,

                picture: "./assets/images/sprites/0253.png",
                pLevel1: "./assets/images/sprites/0253.png",
                pLevel2: "./assets/images/sprites/0254.png",
                pLevel3: "./assets/images/sprites/0255.png",

            };
            char2 = {

                Health: 100,
                Stregth: 15,
                type: "fire",
                isDead: false,

                picture: "./assets/images/sprites/0356.png",
                pLevel1: "./assets/images/sprites/0356.png",
                pLevel2: "./assets/images/sprites/0357.png",
                pLevel3: "./assets/images/sprites/0358.png",

            };
            char3 = {

                Health: 100,
                Stregth: 15,
                type: "grass",
                isDead: false,

                picture: "./assets/images/sprites/0250.png",
                pLevel1: "./assets/images/sprites/0250.png",
                pLevel2: "./assets/images/sprites/0251.png",
                pLevel3: "./assets/images/sprites/0252.png",

            };
            char4 = {

                Health: 100,
                Stregth: 15,
                type: "wind",
                isDead: false,

                picture: "./assets/images/sprites/0247.png",
                pLevel1: "./assets/images/sprites/0247.png",
                pLevel2: "./assets/images/sprites/0248.png",
                pLevel3: "./assets/images/sprites/0249.png",

            };
            StartFresh();
        });

        //Clicks End//////////////////////////////////////////////////////////////////////////////////////////
    };
    StartFresh();

});



