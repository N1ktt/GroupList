// data = JSON.parse(localStorage.getItem("facebookGroupListData"))
data = JSON.parse(`[{"documentId":"0346FC7B6D852132FD3D0623804A6F43","frameId":0,"result":{"indexes":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"names":["_TEST","Zabrze Wczoraj Dziś Jutro","Szukam montażysty/grafika","Grafiki Płatne/Darmowe.","EKIPA YT! MONTAŻ GRAFIKA PŁATNE/PROMOCJA","Boomerawka - sekcja beki z boomerów.","VId","Zabrze dla każdego","Federacja Młodych Socjaldemokratów","Szukam Montażysty/Grafika","Społecznościawka","Informatycy sie zesrali","MONTAŻYŚCI NA YOUTUBE!","Etniczni Widzowie Pulchnego Niedźwiedzia","Ryfkowa Grupa","Wataha Esfara","(Grupa Nieaktualna)","akademia ninja verffiego 乡","YOU CANT JUST PUT THE FIBONACCI SPIRAL ON TOP OF WHATEVER THE FUCK YOU WANT","United Witkoland Empire"]}}]`)
data = data[0].result
const table = document.querySelectorAll("table")[0]
for(i = 0; i<data.indexes.length;i++)
{
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.innerText = data.indexes[i]
    tr.append(td)
    td = document.createElement("td")
    let input = document.createElement("input")
    input.type="checkbox"
    td.append(input)
    tr.append(td)
    td = document.createElement("td")
    td.innerText = data.names[i]
    tr.append(td)
    // document.write(data.indexes[i]," ",data.names[i],"<br>")
    table.append(tr)
}
