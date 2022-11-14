function addUser() 
{
    document.getElementById("player1_name").innerHTML = "";
    document.getElementById("player2_name").innerHTML = "";

    localStorage.setItem("player1_name");
    localStorage.setItem("player2_name");

    window.location = game_page.html;

}

function send () 
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("player2").value;
    actual_answer = parseInt(number1)*parseInt(number2);
     
}