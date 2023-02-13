
document.getElementById("comingUpContent").style.display = "none";
document.getElementById("pastEventsContent").style.display = "none";

function hidePanels() {
    document.getElementById("comingUpContent").style.display = "none";
    document.getElementById("pastEventsContent").style.display = "none";
    document.getElementById("eventsWeekContent").style.display = "none"; 

    document.getElementById("comingUpTab").classList.remove("highlight") ; 
    document.getElementById("pastEventsTab").classList.remove("highlight") ; 
    document.getElementById("eventsWeekTab").classList.remove("highlight") ; 
}

function showComingup() {
    hidePanels();
    document.getElementById("comingUpContent").style.display = "block";
     document.getElementById("comingUpTab").classList.add("highlight") ; 
}
function showPastEvents(){
    hidePanels();
    document.getElementById("pastEventsContent").style.display="block"
document.getElementById("pastEventsTab").classList.add("highlight") ; 
}
function showEventsWeek(){
    hidePanels();
    document.getElementById("eventsWeekContent").style.display="block"
     document.getElementById("eventsWeekTab").classList.add("highlight") ; 

}
