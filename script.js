
function playSample(sampleName){
    var sample = document.getElementById(sampleName)
    sample.play()
}

$("#808_clap").on("click", function(event){
    event.preventDefault()

    playSample("808_clap")
    console.log("clicked")
})

$("#808_cowbell").on("click", function(event){
    event.preventDefault()

    playSample("808_cowbell")
})

$("#808_cymbal").on("click", function(event){
    event.preventDefault()

    playSample("808_cymbal")
    console.log("clicked")
})

$("#808_cowbell").on("click", function(event){
    event.preventDefault()

    playSample("808_cowbell")
})

console.log("here")