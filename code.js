const data = [
    {
        name: "SRISHA S",
        regno: "111519205017",
        ENGINEERING_CHEMISTRY:"O",
        TECHNICAL_ENGLISH:"A",
        DATA_STRUCTURE: "A+",
        WEB_TECHNOLOGY: "B"
    },
    {
        name: "HARINI S",
        regno: "111519205043",
        ENGINEERING_CHEMISTRY:"A+",
        TECHNICAL_ENGLISH:"O",
        DATA_STRUCTURE: "A+",
        WEB_TECHNOLOGY: "A"
    },
    {
        name: "NITHIKA S",
        regno: "111519205050",
        ENGINEERING_CHEMISTRY:"B",
        TECHNICAL_ENGLISH:"O",
        DATA_STRUCTURE: "B+",
        WEB_TECHNOLOGY: "A+"
    },
    {
        name: "HARSHA S",
        regno: "111519205054",
        ENGINEERING_CHEMISTRY:"A",
        TECHNICAL_ENGLISH:"O",
        DATA_STRUCTURE: "B+",
        WEB_TECHNOLOGY: "O"

    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "ENGINEERING_CHEMISTRY : " + data[i].ENGINEERING_CHEMISTRY +"</h3>" + "<h3>" + "TECHNICAL_ENGLISH : " 
            + data[i].TECHNICAL_ENGLISH +"</h3>" +"<h3>" + "DATA_STRUCTURE : " + data[i].DATA_STRUCTURE +"</h3>"+
            "WEB_TECHNOLOGY : " +data[i].WEB_TECHNOLOGY + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "Information is not available!!!" + "</h3>" 

})