
var charPicked = false;
var rivalPIcked = false;
var charChosen = "";
var warNotChosen = [];
var rivalChosen = "";
var LevelNUm = 1;
var enemiesLiving = 0;

////// CHARACTERS /////

var char1 = {

    name: "CharacterOne",
    FullHealth: 100,
    Health: 100,

    Stregth: 20,
    picture: "./assets/images/sprites/0253.png",
    type: "water",

    pLevel1: "./assets/images/sprites/0253.png",
    pLevel2: "./assets/images/sprites/0254.png",
    pLevel3: "./assets/images/sprites/0255.png",
    isDead: false,

}




var char2 = {
    name: "CharacterTwo",
    FullHealth: 100,
    Health: 100,
    Stregth: 20,
    picture: "./assets/images/sprites/0356.png",
    calHealth: 0,
    type: "fire",

    pLevel1: "./assets/images/sprites/0356.png",
    pLevel2: "./assets/images/sprites/0357.png",
    pLevel3: "./assets/images/sprites/0358.png",
    isDead: false,

}

var char3 = {
    name: "CharacterThree",
    FullHealth: 100,
    Health: 100,
    Stregth: 20,
    picture: "./assets/images/sprites/0250.png",
    type: "grass",

    pLevel1: "./assets/images/sprites/0250.png",
    pLevel2: "./assets/images/sprites/0251.png",
    pLevel3: "./assets/images/sprites/0252.png",
    isDead: false,
}

var char4 = {
    name: "CharacterFour",
    FullHealth: 100,
    Health: 100,
    Stregth: 20,
    picture: "./assets/images/sprites/0247.png",
    type: "wind",

    pLevel1: "./assets/images/sprites/0247.png",
    pLevel2: "./assets/images/sprites/0248.png",
    pLevel3: "./assets/images/sprites/0249.png",
    isDead: false,
}


var updateStats = function () {
    var charCalHealth = (charChosen.Health * 100) / charChosen.FullHealth;
    var rivalCalHealth = (rivalChosen.Health * 100) / rivalChosen.FullHealth;
    console.log("player Health :" + charChosen.Health);
    $('#cP_HEalth').css("width", charCalHealth + "%");
    $("#cR_Health").css("width", rivalCalHealth + "%");
    $('#cP_HEalth_Battle').css("width", charCalHealth + "%");


}
var updatePic = function () {
    $("#chosenPlayer").attr("src", charChosen.picture);
    $("#chosenPlayerB").attr("src", charChosen.picture);



    console.log(LevelNUm);
}
var leveUpFunc = function () {

    charChosen.Health += 15;
    charChosen.Stregth += 15;

    console.log("levelUp");
    if (LevelNUm == 1) {
        LevelNUm++;
        charChosen.picture = charChosen.pLevel2;


        updatePic();
    } else if (LevelNUm == 2) {
        LevelNUm++;
        charChosen.picture = charChosen.pLevel3;

        updatePic();
    }
    console.log("Health: " + charChosen.Health + " Stregth : " + charChosen.Stregth);


}

var checkIfDead = function () {

    console.log(enemiesLiving);
    if (charChosen.Health <= 0) {
        charChosen.Health = 0;
        rivalPage();
        $("#selectionPage").text("! You Lose !");
        $('#cP_HEalth').addClass("hide");
        $('#NewGAME').removeClass("hide");
        $("#rival0").attr("class", "hide");
        $("#rival1").attr("class", "hide");
        $("#rival2").attr("class", "hide");
        // Game Over
        // You Lose

    } else if (rivalChosen.Health <= 0) {

        if (enemiesLiving <= 1) {
            //  Choose New Character 
            enemiesLiving++;
            rivalChosen.isDead = true;
            $("#battle").addClass("hide");
            rivalPage();
            updateStats();
        } else {
            rivalPage();
            $("#selectionPage").text("! You Win !");
            updateStats();
            $("#rival0").attr("class", "hide");
            $("#rival1").attr("class", "hide");
            $("#rival2").attr("class", "hide");
            $('#NewGAME').removeClass("hide");
            // All Characters Died
            // You Win 
        }

    }


}


////// when choosing a rival 

var rivalPage = function () {

    var charCalHealth = (charChosen.Health * 100) / charChosen.FullHealth;
    $("#StartDisplay").addClass("hide");
    $("#rival").removeClass("hide");
    // $("#chosenPlayer").text(charChosen);
    $("#chosenPlayer").attr("src", charChosen.picture);
    $('#cP_HEalth').css("width", charCalHealth + "%");
    for (i = 0; i < warNotChosen.length; i++) {

        $("#rival" + i).attr("src", warNotChosen[i].picture);
        if (warNotChosen[i].isDead == true) {
            $("#rival" + i).attr("class", "hide");
            charChosen.Health += 16;
            charChosen.Stregth += 16;
        }

    }



}

//// start The Battle
var battlePage = function () {
    var charCalHealth = (charChosen.Health * 100) / charChosen.FullHealth;
    var rivalCalHealth = (rivalChosen.Health * 100) / rivalChosen.FullHealth;

    $("#rival").addClass("hide");
    $("#battle").removeClass("hide");
    $("#cR_Health").css("width", rivalCalHealth + "%");

    $('#cP_HEalth_Battle').css("width", charCalHealth + "%");
    $("#chosenPlayerB").attr("src", charChosen.picture);
    $("#rivalChosenB").attr("src", rivalChosen.picture);


}




$("#C1").click(function () {
    if (!charPicked) {
        charChosen = char1;
        warNotChosen = [char2, char3, char4];
        rivalPage();
        charPicked = true;
    }
});

$("#C2").click(function () {
    if (!charPicked) {
        charChosen = char2;
        warNotChosen = [char1, char3, char4];
        rivalPage();
        charPicked = true;
    }
});

$("#C3").click(function () {
    if (!charPicked) {
        charChosen = char3;
        warNotChosen = [char1, char2, char4];
        rivalPage();
        charPicked = true;
    }
});

$("#C4").click(function () {
    if (!charPicked) {
        charChosen = char4;
        warNotChosen = [char1, char2, char3,];
        rivalPage();
        charPicked = true;
    }
});




$("#rival0").click(function () {


    rivalChosen = warNotChosen[0];
    battlePage();
    rivalPIcked = true;


});

$("#rival1").click(function () {


    rivalChosen = warNotChosen[1];
    battlePage();
    rivalPIcked = true;


});

$("#rival2").click(function () {


    rivalChosen = warNotChosen[2];
    battlePage();
    rivalPIcked = true;


});

$("#fight").click(function () {


    ///// type battle stengths /////
    console.log("char : " + charChosen.type + " rival : " + rivalChosen.type);
    if ((charChosen.type == "water") && (rivalChosen.type == "fire")) {

        rivalChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);



    } else if ((charChosen.type == "water") && (rivalChosen.type == "wind")) {
        rivalChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);

    } else if ((charChosen.type == "fire") && (rivalChosen.type == "grass")) {

        rivalChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);


    } else if ((charChosen.type == "fire") && (rivalChosen.type == "water")) {
        rivalChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);

    } else if ((charChosen.type == "grass") && (rivalChosen.type == "wind")) {

        rivalChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);


    } else if ((charChosen.type == "grass") && (rivalChosen.type == "fire")) {
        rivalChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);

    }
    else if ((charChosen.type == "wind") && (rivalChosen.type == "water")) {

        rivalChosen.Health -= charChosen.Stregth + (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);


    } else if ((charChosen.type == "wind") && (rivalChosen.type == "grass")) {
        rivalChosen.Health -= charChosen.Stregth - (charChosen.Stregth * .50);
        charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);

    } else {
        rivalChosen.Health -= charChosen.Stregth;
        charChosen.Health -= rivalChosen.Stregth;

    }

    ///// type battle stengths /////


    console.log("Health: " + charChosen.Health + " Stregth : " + charChosen.Stregth);
    updateStats();
    checkIfDead();

});

$('#NewGAME').click(function () {
    charPicked = false;
    rivalPIcked = false;
    charChosen = "";
    warNotChosen = [];
    LevelNUm = 1;
    enemiesLiving = 0;
    char3 = {
        name: "CharacterThree",
        FullHealth: 100,
        Health: 100,
        Stregth: 20,
        picture: "./assets/images/sprites/0250.png",
        type: "grass",
    
        pLevel1: "./assets/images/sprites/0250.png",
        pLevel2: "./assets/images/sprites/0251.png",
        pLevel3: "./assets/images/sprites/0252.png",
        isDead: false,
    }
    char2 = {
        name: "CharacterTwo",
        FullHealth: 100,
        Health: 100,
        Stregth: 20,
        picture: "./assets/images/sprites/0356.png",
        calHealth: 0,
        type: "fire",
    
        pLevel1: "./assets/images/sprites/0356.png",
        pLevel2: "./assets/images/sprites/0357.png",
        pLevel3: "./assets/images/sprites/0358.png",
        isDead: false,
    
    }
    char4 = {
        name: "CharacterFour",
        FullHealth: 100,
        Health: 100,
        Stregth: 20,
        picture: "./assets/images/sprites/0247.png",
        type: "wind",
    
        pLevel1: "./assets/images/sprites/0247.png",
        pLevel2: "./assets/images/sprites/0248.png",
        pLevel3: "./assets/images/sprites/0249.png",
        isDead: false,
    }
    char1 = {

        name: "CharacterOne",
        FullHealth: 100,
        Health: 100,
    
        Stregth: 20,
        picture: "./assets/images/sprites/0253.png",
        type: "water",
    
        pLevel1: "./assets/images/sprites/0253.png",
        pLevel2: "./assets/images/sprites/0254.png",
        pLevel3: "./assets/images/sprites/0255.png",
        isDead: false,
    
    }

    $("#rival").addClass("hide");
    $("#battle").addClass("hide");
    $("#StartDisplay").removeClass("hide");
    $("#rival0").removeClass("hide");
    $("#rival1").removeClass("hide");
    $("#rival2").removeClass("hide");
    $('#NewGAME').addClass("hide");
    $("#selectionPage").text("! Choose Your Rival  !");
    

})



$("#powerUp").click(function () {

    if (LevelNUm >= 3) {
        $("#powerUp").text(" Max Level Reached !");


    }
    else if (LevelNUm <= 2) {



        if ((charChosen.type == "water") && (rivalChosen.type == "fire")) {


            charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);
            console.log(" water v fire")
        } else if ((charChosen.type == "water") && (rivalChosen.type == "wind")) {

            charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);
            console.log(" water v wind ")
        } else if ((charChosen.type == "fire") && (rivalChosen.type == "grass")) {

            charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);
            console.log(" fire v grass ")

        } else if ((charChosen.type == "fire") && (rivalChosen.type == "water")) {

            charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);

        } else if ((charChosen.type == "grass") && (rivalChosen.type == "wind")) {


            charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);
            console.log(" grass v wind ")

        } else if ((charChosen.type == "grass") && (rivalChosen.type == "fire")) {

            charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);
            console.log(" grass v fire ")
        }
        else if ((charChosen.type == "wind") && (rivalChosen.type == "water")) {

            charChosen.Health -= rivalChosen.Stregth - (rivalChosen.Stregth * .50);
            console.log(" wind v water ")

        } else if ((charChosen.type == "wind") && (rivalChosen.type == "grass")) {

            charChosen.Health -= rivalChosen.Stregth + (rivalChosen.Stregth * .50);
            console.log(" wind v grass ")
        } else {
            rivalChosen.Health -= charChosen.Stregth;
            charChosen.Health -= rivalChosen.Stregth;
            console.log(" not compatible  ")
        }
        leveUpFunc();


    }


    updateStats();
    checkIfDead();



});

