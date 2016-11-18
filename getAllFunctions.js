function getAllFunctions() {
    var allfunctions = [];
    for (var i in window) {
        if ((typeof window[i]).toString() == 'function') {
            allfunctions.push(window[i].name)
        }
    }
    console.log(allfunctions)
    return allfunctions
}
