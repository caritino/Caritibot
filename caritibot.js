const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDczNzA4MTg0NzcxNDkzODg5.DkF5cg.Xny4BmQl1rTXOg-lmWzh10BXWOM';

// Tags
var dunwoody = '@dunwoody';

// Dunwoody gyms
var battleshipSculpture = '!battleship';
var bridgeTheTerraces = '!cpk';
var brookRunDogPark = '!brook';
var capitalGrille = '!capgrille';
var clarinetist = '!clarinetist';
var concourseFountain = '!fountain';
var concourseWalkway = '!walkway';
var dunwoodyBaptist = '!dunbap';
var dunwoodyCommunityChurch = '!dcc';
var dunwoodyFarmHouse = '!farmhouse';
var dunwoodyMarta = '!dunmarta';
var dunwoodyPreservationTrust = '!preservation';
var dunwoodyUnitedMethodistChurch = '!dumc';
var farmburger = '!farmburger';
var firstBaptistChurchAtlanta = '!1stbapatl';
var inMemoryofGeoffreySavage_HomeDepot= '!hd';
var kingandQueenBuildings = '!kq';
var ladyStatue = '!ladystatue';
var lakeRidgeGazebo = '!lakeridge';
var logansandBlairsCampNancy = '!logan';
var manhattanTower = '!manhattan';
var newApostolicChurch = '!nac';
var northAtlantaChurchofChrist = '!northatlanta';
var pEMCOLake = '!pemco';
var perimeterMallPlaypark = '!macys';
var perimeterSummitFountain = '!summitfountain';
var ravinia = '!ravinia';
var sandySpringsMarta = '!ssmarta';
var seasons52 = '!seasons52';
var shoppingCenterGazebo = '!alons';
var sprintStore = '!sprint';
var spruillChimney = '!spruill';
var stJudeoftheApostleCatholicChurch = '!stjude';
var stLukesPresbyterian  = '!stlukes';
var starbucks = '!sbux';
var surfExpoFountain = '!surf';
var terracesPondBridge = '!terracespond';
var thatPieMural_BagelBoys = '!bagel';

client.login(token);
client.on('message', message => {

    // Battleship Sculpture - !battleship
    if(message.content.toLowerCase().includes('details: ' + battleshipSculpture)){
        message.channel.send(battleshipSculpture);
        message.channel.send(dunwoody);
    }

    // Bridge the Terraces - !cpk
    else if(message.content.toLowerCase().includes('details: ' + bridgeTheTerraces)){
        message.channel.send(bridgeTheTerraces);
        message.channel.send(dunwoody);
    }

    // Brook Run Dog Park - !brook
    else if(message.content.toLowerCase().includes('details: ' + brookRunDogPark)){
        message.channel.send(brookRunDogPark);
        message.channel.send(dunwoody);
    }

    // Capital Grille - !capgrille
    else if(message.content.toLowerCase().includes('details: ' + capitalGrille)){
        message.channel.send(capitalGrille);
        message.channel.send(dunwoody);
    }

    // Clarinetist - !clarinetist
    else if(message.content.toLowerCase().includes('details: ' + clarinetist)){
        message.channel.send(clarinetist);
        message.channel.send(dunwoody);
    }

    // Concourse Fountain - !fountain
    else if(message.content.toLowerCase().includes('details: ' + concourseFountain)){
        message.channel.send(concourseFountain);
        message.channel.send(dunwoody);
    }

    // Concourse Walkway - !walkway
    else if(message.content.toLowerCase().includes('details: ' + concourseWalkway)){
        message.channel.send(concourseWalkway);
        message.channel.send(dunwoody);
    }

    // Dunwoody Baptist - !dunbap
    else if(message.content.toLowerCase().includes('details: ' + dunwoodyBaptist)){
        message.channel.send(dunwoodyBaptist);
        message.channel.send(dunwoody);
    }

    // Dunwoody Community Church - !dcc
    else if(message.content.toLowerCase().includes('details: ' + dunwoodyCommunityChurch)){
        message.channel.send(dunwoodyCommunityChurch);
        message.channel.send(dunwoody);
    }

    // Dunwoody Farm House - !farmhouse
    else if(message.content.toLowerCase().includes('details: ' + dunwoodyFarmHouse)){
        message.channel.send(dunwoodyFarmHouse);
        message.channel.send(dunwoody);
    }

    // Dunwoody Marta - !dunmarta
    else if(message.content.toLowerCase().includes('details: ' + dunwoodyMarta)){
        message.channel.send(dunwoodyMarta);
        message.channel.send(dunwoody);
    }

    // Dunwoody Preservation Trust - !preservation
    else if(message.content.toLowerCase().includes('details: ' + dunwoodyPreservationTrust)){
        message.channel.send(dunwoodyPreservationTrust);
        message.channel.send(dunwoody);
    }

    // Dunwoody United Methodist Church - !dumc
    else if(message.content.toLowerCase().includes('details: ' + dunwoodyUnitedMethodistChurch)){
        message.channel.send(dunwoodyUnitedMethodistChurch);
        message.channel.send(dunwoody);
    }

    // Farmburger - !farmburger
    else if(message.content.toLowerCase().includes('details: ' + farmburger)){
        message.channel.send(farmburger);
        message.channel.send(dunwoody);
    }

    // First Baptist Church Atlanta - !1stbapatl
    else if(message.content.toLowerCase().includes('details: ' + firstBaptistChurchAtlanta)){
        message.channel.send(firstBaptistChurchAtlanta);
        message.channel.send(dunwoody);
    }

    // In Memory of Geoffrey Savage / Home Depot- !hd
    else if(message.content.toLowerCase().includes('details: ' + inMemoryofGeoffreySavage_HomeDepot)){
        message.channel.send(inMemoryofGeoffreySavage_HomeDepot);
        message.channel.send(dunwoody);
    }

    // King and Queen Buildings - !kq
    else if(message.content.toLowerCase().includes('details: ' + kingandQueenBuildings)){
        message.channel.send(kingandQueenBuildings);
        message.channel.send(dunwoody);
    }

    // Lady Statue - !ladystatue
    else if(message.content.toLowerCase().includes('details: ' + ladyStatue)){
        message.channel.send(ladyStatue);
        message.channel.send(dunwoody);
    }

    // Lake Ridge Gazebo - !lakeridge
    else if(message.content.toLowerCase().includes('details: ' + lakeRidgeGazebo)){
        message.channel.send(lakeRidgeGazebo);
        message.channel.send(dunwoody);
    }

    // Logan's and Blair's Camp Nancy - !logan
    else if(message.content.toLowerCase().includes('details: ' + logansandBlairsCampNancy)){
        message.channel.send(logansandBlairsCampNancy);
        message.channel.send(dunwoody);
    }

    // Manhattan Tower - !manhattan
    else if(message.content.toLowerCase().includes('details: ' + manhattanTower)){
        message.channel.send(manhattanTower);
        message.channel.send(dunwoody);
    }

    // New Apostolic Church - !nac
    else if(message.content.toLowerCase().includes('details: ' + newApostolicChurch)){
        message.channel.send(newApostolicChurch);
        message.channel.send(dunwoody);
    }

    // North Atlanta Church of Christ - !northatlanta
    else if(message.content.toLowerCase().includes('details: ' + northAtlantaChurchofChrist)){
        message.channel.send(northAtlantaChurchofChrist);
        message.channel.send(dunwoody);
    }

    // PEMCO Lake - !pemco
    else if(message.content.toLowerCase().includes('details: ' + pEMCOLake)){
        message.channel.send(pEMCOLake);
        message.channel.send(dunwoody);
    }

    // Perimeter Mall Playpark - !macys
    else if(message.content.toLowerCase().includes('details: ' + perimeterMallPlaypark)){
        message.channel.send(perimeterMallPlaypark);
        message.channel.send(dunwoody);
    }

    // Perimeter Summit Fountain - !summitfountain
    else if(message.content.toLowerCase().includes('details: ' + perimeterSummitFountain)){
        message.channel.send(perimeterSummitFountain);
        message.channel.send(dunwoody);
    }

    // Ravinia - !ravinia
    else if(message.content.toLowerCase().includes('details: ' + ravinia)){
        message.channel.send(ravinia);
        message.channel.send(dunwoody);
    }

    // Sandy Springs Marta - !ssmarta
    else if(message.content.toLowerCase().includes('details: ' + sandySpringsMarta)){
        message.channel.send(sandySpringsMarta);
        message.channel.send(dunwoody);
    }

    // Seasons 52 - !seasons52
    else if(message.content.toLowerCase().includes('details: ' + seasons52)){
        message.channel.send(seasons52);
        message.channel.send(dunwoody);
    }

    // Shopping Center Gazebo - !alons
    else if(message.content.toLowerCase().includes('details: ' + shoppingCenterGazebo)){
        message.channel.send(shoppingCenterGazebo);
        message.channel.send(dunwoody);
    }
    
    // Sprint Store - !sprint
    else if(message.content.toLowerCase().includes('details: ' + sprintStore)){
        message.channel.send(sprintStore);
        message.channel.send(dunwoody);
    }

    // Spruill Chimney - !spruill
    else if(message.content.toLowerCase().includes('details: ' + spruillChimney)){
        message.channel.send(spruillChimney);
        message.channel.send(dunwoody);
    }

    // St Jude of the Apostle Catholic Church - !stjude
    else if(message.content.toLowerCase().includes('details: ' + stJudeoftheApostleCatholicChurch)){
        message.channel.send(stJudeoftheApostleCatholicChurch);
        message.channel.send(dunwoody);
    }

    // St Luke’s Presbyterian  - !stlukes
    else if(message.content.toLowerCase().includes('details: ' + stLukesPresbyterian)){
        message.channel.send(stLukesPresbyterian);
        message.channel.send(dunwoody);
    }

    // Starbucks - !sbux
    else if(message.content.toLowerCase().includes('details: ' + starbucks)){
        message.channel.send(starbucks);
        message.channel.send(dunwoody);
    }

    // Surf Expo Fountain - !surf
    else if(message.content.toLowerCase().includes('details: ' + surfExpoFountain)){
        message.channel.send(surfExpoFountain);
        message.channel.send(dunwoody);
    }

    // Terraces Pond Bridge - !terracespond
    else if(message.content.toLowerCase().includes('details: ' + terracesPondBridge)){
        message.channel.send(terracesPondBridge);
        message.channel.send(dunwoody);
    }

    // That Pie Mural / Bagel Boys - !bagel
    else if(message.content.toLowerCase().includes('details: ' + thatPieMural_BagelBoys)){
        message.channel.send(thatPieMural_BagelBoys);
        message.channel.send(dunwoody);
    }
    
    else if(message.content.toLocaleLowerCase() === 'hello') {
        message.channel.send('Obligame prro! ' + message.author);
    }
});



/*
client.on("guildMemberAdd", MemberAdd => {

    MemberAdd.guild.channels.find("name", "sbux").send("!sbux")
    console.log("enter"); 
});
*/
