let notes = [2000, 500, 200, 100] // array containing all the denomminations

let button = document.querySelector("button")
let text = document.querySelector(".data")

// doubt-- why here ".value" gives us the value attribute of the input field but when we use it anywhere else, it gives us the required result



button.addEventListener("click", () => {
    
    let counts = [0, 0, 0, 0]
    
    let nextNote = notes[0] // denomination of note with which we'll start initially
    for(let pos=0; pos<notes.length;){
    
    // we can also use switch-case statements if we want
    
        if(text.value == notes[pos]){ // in case if the starting amount is same as one of the denominations
            if(pos == notes.length-1){
                nextNote = notes[pos]
                counts[pos] = Math.floor(text.value/nextNote)
                text.value = text.value - nextNote*counts[pos]
            }
            else {
                pos++
                nextNote = notes[pos]
            }
        }

        if(text.value < notes[pos]){
            pos++
            nextNote = notes[pos]
        }

        if(text.value > notes[pos]){ // if not then
            if(text.value % nextNote == 0 && pos < notes.length-1){
                counts[pos] = Math.floor(text.value/nextNote)-1
                text.value = text.value - nextNote*counts[pos]
                pos++
                nextNote = notes[pos]
            }
            else{
                counts[pos] = Math.floor(text.value/nextNote)
                text.value = text.value - nextNote*counts[pos]
                pos++
                nextNote = notes[pos]
            }
        }

        if(text.value == 0){
            console.log(counts)
            // button.insertAdjacentElement("afterend", "<div class='show-result'> </div>")
            let showResult = document.querySelector(".show-result")
            showResult.innerHTML = `<h4>Number of notes that you will withdraw of each denomination will be:</h4> 
            2000: ${counts[0]} <br> 500: ${counts[1]} <br> 200: ${counts[2]} <br> 100: ${counts[3]}`
            break
        }
    }
})

// document.querySelector(".reset").addEventListener("click", () => {
//     document.querySelector(".my-form").reset()
// })
