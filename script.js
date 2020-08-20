// Create MomentJS variables to parse date/time
const momentDate = moment().format(`LLL`);
const currentTime = parseInt(moment().format('HH'));
const table = document.getElementById("timeblock")
const m = moment();
const clearBtn = $("#clearStorage");
$(`#currentDay`).text(momentDate);

// Function to dynamically populate dayplanner with rows,cells, and content
function plannerPopulate(){
    for(i=9; i<18; i++){

        let row = table.insertRow();
        let hourCell = row.insertCell(0);
        let textCell = row.insertCell(1);
        let saveCell = row.insertCell(2);
        let textArea = $(`<textarea>`);

        let saveIcon = $(`<i>`);
        let currentHour = `${i}:00`;

        if(i == 9){
            currentHour = `09:00`
        }

        $(row).attr(`class`,`row`);

        hourCell.innerHTML = currentHour ;
        $(hourCell).attr(`class`, `hour`);
        $(hourCell).attr(`id`, `hour${i}`);

        $(textArea).attr(`value`, i);
        $(textArea).attr(`id`, `text${i}`);

        $(textCell).append(textArea);
        $(textCell).attr(`id`, `textCell`);
        
        $(saveCell).attr(`class`, `saveBtn`)
        $(saveCell).append(saveIcon)
        $(saveIcon).attr(`class`, `fas fa-save`)

        $("<textarea>").each(function(){
            let hourValue = textArea.attr("value")            
    
            if (hourValue > currentTime) {
                textArea.attr(`class`, `future`)
                
            }
            if (hourValue < currentTime){
                textArea.attr(`class`, `past`)
            }
    
            if (hourValue == currentTime){
                textArea.attr(`class`, `present`)
            }
        })

    }
$(`#text9`).append(localStorage.getItem("9"));
$(`#text10`).append(localStorage.getItem("10"));
$(`#text11`).append(localStorage.getItem("11"));
$(`#text12`).append(localStorage.getItem("12"));
$(`#text13`).append(localStorage.getItem("13"));
$(`#text14`).append(localStorage.getItem("14"));
$(`#text15`).append(localStorage.getItem("15"));
$(`#text16`).append(localStorage.getItem("16"));
$(`#text17`).append(localStorage.getItem("17"));

}  

plannerPopulate();
console.log(localStorage);

// Adds values for all save buttons after page has loaded
document.querySelectorAll(`.saveBtn`).forEach(btn => {
    btn.addEventListener(`click`, event => {

        localStorage.setItem("9", $(`#text9`).val());
        localStorage.setItem("10", $(`#text10`).val());
        localStorage.setItem("11", $(`#text11`).val());
        localStorage.setItem("12", $(`#text12`).val());
        localStorage.setItem("13", $(`#text13`).val());
        localStorage.setItem("14", $(`#text14`).val());
        localStorage.setItem("15", $(`#text15`).val());
        localStorage.setItem("16", $(`#text16`).val());
        localStorage.setItem("17", $(`#text17`).val())
    })
})

// Clear local storage function, which is added to an eventlistener
function clearStorage(){
    localStorage.clear();
}

