function randomGroup(){
    //splits the input into splitted
    var splitted = $('textarea').val().split(',');

    // gets the number of the splitted elements
    var nameLength = splitted.length;

    //gets the number of groups from the input
    var numgroups = parseInt(document.getElementById('numgroup').value)

    //calculates the amount of people per group
    var groupSize = nameLength / numgroups;

    // removes previous cards/groups generated
    $('#groupcards').empty();
    for (i = 0; i < numgroups; i++) {
        // creates a new card for each new group
        $('#groupcards').append('<div class="card bg-light mb-3 groupcard" id="'+(i+1)+'" ><div class="card-header"><h5>Group ' + (i+1) + '</h5></div></div>');
    }
    
    $('.groupcard').each(function() {
        //for every group card
		for (i = 0; i < groupSize; i++) {
            // generate a dynamic floor
            var dynamicFloor = Math.floor(splitted.length * Math.random());

            // add a new student for each group
			if ( splitted[dynamicFloor] ){
				$(this).append('<div class="card-body">' + splitted[dynamicFloor] + '</div>');
            }
            //splices the array
            splitted.splice(dynamicFloor, 1);
		}
    });

    //unhides the random group picker button
    document.getElementById("groupDone").style.visibility = "visible";
    

}

function pickGroup(){
    //picks a random group
    // unhides the display element
    document.getElementById("picker").style.display = "block";
    //gets the number of group elements
    var numgroups = parseInt(document.getElementById('numgroup').value)
    //picks a random group element
    var randomGroup = document.getElementById(getRandomInt(numgroups)).id;
    //shows the random group element
    document.getElementById("randomgroup").innerHTML = "<h2>Group " +randomGroup+ "<h2>";
}

function getRandomInt(max) {
    //picks a number between 1 - max
    return (Math.floor(Math.random() * Math.floor(max)))+1;
}