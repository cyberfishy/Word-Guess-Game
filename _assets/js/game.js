window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories = ['Luzanne', 'Everest', 'Aconcagua', 'Denali', 'Kilimanjaro', 'Elbrus', 'Damavand', 'Chimborazo', 'Kinabalu', 'Rainier', 'Kangchenjunga', 'Shasta', 'Kenya', 'Fuji', 'Erebus', 'Ararat', 'Etna', 'Karisimbi', 'Whitney', 'Haleakala',;         // Array of words to guess
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var letters;              // Number of letters in word '-'
  
   
  
  
  