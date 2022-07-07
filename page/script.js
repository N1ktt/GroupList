//formatting settings
let CELLSPERATOR = ","
let ROWSTART = "["
let ROWEND = "]"

if(localStorage.getItem("CELLSPERATOR") == null)
{
    const inps = document.querySelector("#formatting").querySelectorAll('input[type="text"]')
    localStorage.setItem("CELLSPERATOR",CELLSPERATOR)
    inps[0].value = CELLSPERATOR
    localStorage.setItem("ROWSTART",ROWSTART)
    inps[1].value = ROWSTART
    localStorage.setItem("ROWEND",ROWEND)
    inps[2].value = ROWEND
}else{
    const inps = document.querySelector("#formatting").querySelectorAll('input[type="text"]')
    if(localStorage.getItem("CELLSPERATOR")!=null)
    {
        CELLSPERATOR = localStorage.getItem("CELLSPERATOR")
    }else{
        localStorage.setItem("CELLSPERATOR",CELLSPERATOR)
    }
    inps[0].value = CELLSPERATOR
    if(localStorage.getItem("ROWSTART")!=null)
    {
        ROWSTART = localStorage.getItem("ROWSTART")
    }else{
        localStorage.setItem("ROWSTART",ROWSTART)
    }
    inps[1].value = ROWSTART
    if(localStorage.getItem("ROWEND")!=null)
    {
        ROWEND = localStorage.getItem("ROWEND")
    }else{
        localStorage.setItem("ROWEND",ROWEND)
    }
    inps[2].value = ROWEND
}


//get data and generate table
data = JSON.parse(localStorage.getItem("facebookGroupListData"))
//data = JSON.parse(`[{"documentId":"0346FC7B6D852132FD3D0623804A6F43","frameId":0,"result":{"indexes":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"names":["_TEST","Zabrze Wczoraj Dziś Jutro","Szukam montażysty/grafika","Grafiki Płatne/Darmowe.","EKIPA YT! MONTAŻ GRAFIKA PŁATNE/PROMOCJA","Boomerawka - sekcja beki z boomerów.","VId","Zabrze dla każdego","Federacja Młodych Socjaldemokratów","Szukam Montażysty/Grafika","Społecznościawka","Informatycy sie zesrali","MONTAŻYŚCI NA YOUTUBE!","Etniczni Widzowie Pulchnego Niedźwiedzia","Ryfkowa Grupa","Wataha Esfara","(Grupa Nieaktualna)","akademia ninja verffiego 乡","YOU CANT JUST PUT THE FIBONACCI SPIRAL ON TOP OF WHATEVER THE FUCK YOU WANT","United Witkoland Empire"]}}]`)
data = data[0].result
const table = document.querySelectorAll("table")[0]
for(i = 0; i<data.indexes.length;i++)
{
    let tr = document.createElement("tr")
    tr.classList.add("resultRow")
    let td = document.createElement("td")
    td.classList.add("indexRow")
    td.innerText = data.indexes[i]
    tr.append(td)
    td = document.createElement("td")
    let input = document.createElement("input")
    td.classList.add("removeRow")
    input.type="checkbox"
    input.checked="checked"
    td.append(input)
    tr.append(td)
    td = document.createElement("td")
    td.classList.add("nameRow")
    td.innerText = data.names[i]
    tr.append(td)
    table.append(tr)
}


function generateResult()
{
    let result = ""
    const rows = document.querySelectorAll(".resultRow")
    const textarea = document.querySelector("textarea")

    const ths = document.querySelectorAll("th")
    const SHOWINDEX = ths[0].querySelector("input").checked
    const SHOWREMOVED = ths[1].querySelector("input").checked
    const SHOWNAME = ths[2].querySelector("input").checked
    rows.forEach((Element)=>{
        const tds = Element.querySelectorAll("td")
        if(tds[1].querySelector("input").checked)
        {
            result += ROWSTART
            if(SHOWINDEX)
            {
                result+= tds[0].innerText
            }
            if(SHOWINDEX && (SHOWREMOVED || SHOWNAME))
            {
                result+=CELLSPERATOR
            }
            if(SHOWREMOVED)
            {
                result+= tds[1].querySelector("input").checked
            }
            if(SHOWNAME && ((SHOWINDEX && SHOWREMOVED) || SHOWREMOVED))
            {
                result+=CELLSPERATOR
            }
            if(SHOWNAME)
            {
                result+= tds[2].innerText
            }
            result+= ROWEND
        }
    })
    textarea.value = result

}
generateResult()



document.querySelector("#update").addEventListener("click", generateResult)
document.querySelector("#copy").addEventListener("click", ()=>
{
    const textarea = document.querySelector("textarea")
    navigator.clipboard.writeText(textarea.value)
    
})


document.querySelector("#save").addEventListener("click", ()=>
{
    const inps = document.querySelector("#formatting").querySelectorAll('input[type="text"]')

    generateResult()
})
