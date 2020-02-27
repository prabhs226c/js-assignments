function createItem(item)
{
    return "<li>"+item+"</li>";
}

function createList(listArray)
{
    let list="";
   
    for(i=0;i < listArray.length; i++)
    {

        list += createItem(listArray[i]);
    }
    
    return "<ul>"+list+"</ul>";
}

