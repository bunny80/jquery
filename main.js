
var ccontainer=document.getElementById("comments");
var load=document.getElementById("load");

load.addEventListener("click",function()
{
    var ourRequest=new XMLHttpRequest();
    ourRequest.open('GET','jquery.json');
    ourRequest.onload=function()
    {
        var ourData=JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
}
)
function renderHTML(data)
{
    var htmlString="hii";
  // for(i=0;i<data.length();i++)
   //{
    //   htmlString+=data[i].title;
   //}
      ccontainer.insertAdjacentHTML('beforeend',htmlString);
      //container.insertAdjacentHTML
}
