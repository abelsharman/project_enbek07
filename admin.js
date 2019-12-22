function first() {
    document.getElementById("p").style.display = "inline";
    document.getElementById("bodya").style.backgroundColor = "lightgrey";
}

function second() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("phone").value;
    let d = document.getElementById("mycheckbox").checked;
    
    var y = document.createElement("TR");
    document.getElementById("tablea").appendChild(y);
    
    if (d == true) {
        var z = document.createElement("TD");
        var t = document.createTextNode("Active");
        z.appendChild(t);
        y.appendChild(z);
    }
    else {
        var z = document.createElement("TD");
        var t = document.createTextNode("Inactive");
        z.appendChild(t);
        y.appendChild(z);
    }
    
    var z = document.createElement("TD");
    var t = document.createTextNode(a);
    z.appendChild(t);
    y.appendChild(z);
    
    var z = document.createElement("TD");
    var t = document.createTextNode(b);
    z.appendChild(t);
    y.appendChild(z);
    
    var h = document.getElementById("admin").value;
    var z = document.createElement("TD");
    var t = document.createTextNode(h);
    z.appendChild(t);
    y.appendChild(z);
    
    var z = document.createElement("TD");
    var t = document.createTextNode(c);
    z.appendChild(t);
    y.appendChild(z);
    
    
    
    var x = document.createElement("TD");
    var t = document.createElement("IMG");
    t.src = "images/9.png";
    t.style.width = "30px";
    t.style.verticalAlign = "middle";
    
    t.addEventListener('click',function third() {
        var r = confirm("Are u sure, want to delete?");
        if (r == true) {
            event.target.parentNode.parentNode.style.display = "none";
        }
        else {
            h.style.margin = "0 2px"; 
        }
        
    });
    x.appendChild(t);
    y.appendChild(x);
    
    document.getElementById("p").style.display = "none";
    document.getElementById("bodya").style.backgroundColor = "white";
}
