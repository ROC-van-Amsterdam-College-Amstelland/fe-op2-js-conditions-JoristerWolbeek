var borderType = null;
function colorPick(elem) {
    //deze code computes (berekend) de toegepaste css. Je kunt deze laten staan
    borderType = window.getComputedStyle(elem, null).getPropertyValue("border-style");

    /* A) uncomment de onderstaande code en bekijk je console in DevTools 
        als je op de knoppen (divs) drukt. 
        Met de sneltoets CTRL+/ kun je iets commentaren of oncommentaren
     */

    //console.log(borderType); // <--deze code staat nu nog in commentaar
    console.log(borderType);



    /* B) maak 4 if-statements die de variabele borderType vergelijkt met eenstring. Je kunt gebruik maken van de verschillende strings die worden getoond in je console die je bij A) hebt gebruikt. Als de if-statement true is verander dan de kleur van de achtergrond voor een kleur van een van de andere blokken. 
    
    if(borderType......)
    {

    }
     */
    if(borderType)console.log(borderType) = "dashed" ;
    document.getElementById("paars").style.backgroundColor = "red" ;

    if(borderType)console.log(borderType) = "dotted" ;
    document.getElementById("paars").style.backgroundColor = "yellow" ;

    if(borderType)console.log(borderType) = "ridge" ;
    document.getElementById("paars").style.backgroundColor = "purple" ;

    if(borderType)console.log(borderType) = "groove" ;
    document.getElementById("paars").style.backgroundColor = "green" ;



    /* C) Vul de code in de if-statements aan. Nu veranderd de backgroundColor maar nu moet je ervoor zorgen dat de border-type veranderd als de if-statement wordt uitgevoerd is (conditie: true) 
    */


}

