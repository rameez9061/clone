let search = document.getElementById("search-bar");
let main = document.querySelector(".main");


search.addEventListener("click",()=>{

       search.style.border = "1px solid blue";
})

main.addEventListener("click",()=>{

    search.style.border = "1px solid rgb(46, 43, 43)";
})


document.addEventListener("DOMContentLoaded", function() {
    var videos = document.getElementsByTagName("video");
    console.log(videos)
    let videosarray = Array.from(videos);

    videosarray.forEach(function(video) {
        var container = video.parentElement;

        container.addEventListener("mouseenter", function() {
            video.play();
        });

        container.addEventListener("mouseleave", function() {
            video.pause();
        });
    });
});
