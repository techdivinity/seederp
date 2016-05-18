function chkAddSubCatForm()
{
    var subcatbox=document.getElementById("subcat");
    if(subcatbox.value=="")
    {
        subcatbox.style.border="2px solid red";
    }
    else
    {
        subcatbox.style.border='';
        addSubcategory();
    }
}
function addSubcategory()
{
    var cat=document.getElementById("cat").value;
    var subcat=document.getElementById("subcat").value;
    
    var url="../AddSubCategory?cat="+cat+"&subcat="+subcat;  

    if(window.XMLHttpRequest)
    {  request=new XMLHttpRequest();  }  
    else if(window.ActiveXObject)
    {  request=new ActiveXObject("Microsoft.XMLHTTP");  }  

    try
    {  
        request.onreadystatechange=changePerResult;  
        request.open("GET",url,true);  
        request.send();  
    }catch(e){alert("Unable to connect to server");}
}
function changePerResult(){  
    if(request.readyState==4)
    {  
        var val=request.responseText;
        var v1=new String(val);
        v1=v1.trim();
        
        if(v1=="SUCCESS")
        {
            var d=document.getElementById("addsubCat");
            d.innerHTML="<center><font color=\"blue\">New Sub Category Added Successfully.</font></center>";
            window.location.reload();
        }
        else
        {
            alert("Something Wrong...");
        }
    }  
}

function clearOne()
{
//    var d=document.getElementById("one");
//    d.innerHTML="WOW";
}


