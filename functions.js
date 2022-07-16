function disco(htmltext){
    var target = document.querySelector(htmltext);
    var arr = target.style.color;
    /*regex sorcery - seek all characters that are not digits globally and replace with blank*/
    arr = arr.replace(/[^\d,]/g, '').split(',');
    for (var colour in arr){
        arr[colour] = parseInt(arr[colour]);
        if (Math.round(Math.random()) === 1)   {
            arr[colour] += Math.round(Math.random() * 5);
        }
        else {
            arr[colour] -= Math.round(Math.random() * 5);
        }
        if (arr[colour] >= 255) {
            arr[colour] = 245;
        }
        if (arr[colour] <= 30) {
            arr[colour] = 40;
        }
    }
    var colstr = "rgb(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ")";
    target.style.color = colstr;
}
function resizer() {
    var element = document.querySelector("aside");
    var targetclass = "min-vh-100"; /*original min-vh-100*/
    if (window.innerWidth < 768) {
        element.classList.remove(targetclass);
    }
    else {
        element.classList.add(targetclass);
    }
}
function contactsubmit() {
    alert("This doesn't do anything yet!");
}