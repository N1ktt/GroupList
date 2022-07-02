data = JSON.parse(localStorage.getItem("facebookGroupListData"))
data = data[0].result
for(i = 0; i<data.indexes.length;i++)
{
    document.write(data.indexes[i]," ",data.names[i],"<br>")
}