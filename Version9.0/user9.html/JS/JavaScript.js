const CONFIG_URL = "https://script.google.com/macros/s/AKfycbw4w0n6KuoERC4t_p1r-pYo19p6q5yOT_RDcC_thuFFyx0jv33EBviRdj8ElX-zH1Y1/exec";

function Inventions() {
    alert("Vote for your Favorite Invention!");

    $.getJSON(CONFIG_URL, function(data) {
        $('.card').each(function(index) {
            var globalCount = data[index] !== undefined ? data[index] : 0;
            $(this).find('.count-value').text(globalCount);
        });
    });

    $('.card').each(function(index) {
        var $card = $(this);
        var $span = $card.find('.count-value');

        $card.off('click').on('click', function() {
            $span.text("..."); 

            $.ajax({
                url: CONFIG_URL,
                type: "POST",
                data: { id: index }, 
                dataType: "json",
                success: function(response) {
                    if(response.status === "success") {
                        $span.text(response.newCount); 
                    } else {
                        $span.text("Error: Sheet missed position " + response.clickedId);
                    }
                },
                error: function() {
                    $span.text("API Error");
                }
            });
        });
    });
}

function FavPerson() {
    const Fav = document.getElementById("FavCharacter").value; 

    if (Fav == "Candace"){
        document.getElementById("FunFact").textContent = "Candace has already planned out the names of her future kids being Xavier and Amanda";
    } else if (Fav == "Linda"){
        document.getElementById("FunFact").textContent = "As a teenager, Linda went on a date with a young Heinz Doofenshmirtz";
    } else if (Fav == "Lawrence"){
        document.getElementById("FunFact").textContent = "Lawrence actually knows about his sons inventions unlike Linda who is unaware";
    } else if (Fav == "Isabella"){
        document.getElementById("FunFact").textContent = "Isabella's pet Chihuahua Pinky is also a part of the OWCA";
    } else if (Fav == "Baljeet"){
        document.getElementById("FunFact").textContent = "Baljeet has an irrational fear for contradictions and never uses them himself";
    } else if (Fav == "Buford"){
        document.getElementById("FunFact").textContent = "Buford can speak french fluently but tries to keep it a secret";
    } else {
        document.getElementById("FunFact").textContent = "Does not recognize what you inputted, make sure the name is written same as is on the table and it is case sensitive";
    }
}
function mouseOn(img) {
    document.getElementById("building").style.display = "block";
}
function mouseOff(img) {
    document.getElementById("building").style.display = "none";
}
function OWCAdesc(){
    document.getElementById("desc").innerHTML = "O.W.C.A. stands for the Organization Without a Cool Acronym. The agency's primary mission is to stop evil scientists and villains from carrying out diabolical schemes, largely by employing highly trained, fedora-wearing animals."
}