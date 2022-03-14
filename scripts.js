//top bar
//navigation 
function goToId(name) 
{
    window.location.href="#"+name;
}


function change()
{
    document.getElementById("cipher").style.backgroundColor = "rgba(255,255,255,0)";
    document.getElementById("cipher").style.color = "rgba(0,0, 0,1)";
    document.getElementById("cipher").innerHTML = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG<br/>";
}

function change_back()
{
    document.getElementById("cipher").style.backgroundColor = "rgba(0,0,0,0.5)";
    document.getElementById("cipher").style.color = "rgba(255,255,255,0.5)";
    document.getElementById("cipher").innerHTML = "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD<br/>";
}