function getData(){
    console.log("a")
    data = {
        indexes : [1,2,3],
        names : ["imiejeden","dwa", "trii"]
    }
    return data
}


document.querySelector("input").addEventListener("click", () => {


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tab = tabs[0]
        console.log(tab.id)
        chrome.scripting.executeScript({
            target: {tabId : tab.id},
            function: getData
        },
        function (result){
            console.log(result)
            localStorage.setItem("facebookGroupListData", JSON.stringify(result))
            chrome.tabs.create({ url: "../page/index.html" })
        })
    })

})
