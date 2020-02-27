function createItem(item)
{
    return "<li>"+item+"</li>";
}

function createList(arr)
{
    let list = "";
    for(i=0;i < arr.length; i++)
    {
        list += "<li>"+arr[i]+"</li>";
    }
    return "<ul>"+list+"</ul>";
}