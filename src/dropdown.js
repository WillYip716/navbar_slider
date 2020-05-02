const createDropdown = function(node, arr){
    if(arr.length > 0){
        let holder = document.createElement("div");
        holder.classList.add("dropdown");
        for(var i = 0; i < arr.length; i++){
            let drpEle = document.createElement("a");
            drpEle.innerHTML = arr[i][0];
            drpEle.href = arr[i][1];
            drpEle.style.display = "block";
            holder.appendChild(drpEle);
        }

        node.onclick = function(){
            holder.classList.toggle("show");
        }

        node.appendChild(holder);

        var styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = '.dropdown { display: none; position:absolute; } .show{display: block;}';
        document.head.appendChild(styleSheet);
    }

    
}

export { createDropdown }