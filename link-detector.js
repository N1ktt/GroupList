function removeGroups()
{
    console.log("Legia kurwom jebaną jest!")
}
let link = window.location.toString().slice(34)
console.log(link)

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0]
    console.log(tabs)
    // console.log(tab.id)
    // tabs.forEach(element => {
    //     console.log(element.id)
    // });
    chrome.scripting.executeScript({
        target: {tabId : tab.id},
        function: removeGroups
    },
    function (result){
        console.log(result)
        localStorage.setItem("facebookGroupListData", JSON.stringify(result))
        chrome.tabs.create({ url: "../page/index.html" })
    })
})