function getData(){
    console.log("a")

    const list = document.querySelectorAll(".b20td4e0")
    const spans = list[0].querySelectorAll("span")
    console.log(list)
    spans.forEach((element)=>{
        console.log(element.innerText)
    })
    data = {
        indexes : [],
        names : []
    }
    let j = 1
    for(i = 0;i<spans.length;i+=2)
    {
        data.indexes.push(j)
        data.names.push(spans[i].innerText)
        j++
    }
    console.log(data)
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
