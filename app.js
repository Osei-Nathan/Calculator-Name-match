function calculateLove() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var result = document.getElementById("result");

    // love calculation logic here 
    var lovePercentage = Math.floor(Math.random() * 101);

    result.innerHTML = "Love Percentage: " + lovePercentage + "%";
}

