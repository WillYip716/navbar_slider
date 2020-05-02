const createSlider = function(node,arr){
    if(arr.length > 0){
        let holder = document.createElement("div");
        let dotHolder = document.createElement("div");
        holder.classList.add("slider");
        for(var i = 0; i < arr.length; i++){
            let sliderEle = document.createElement("div");
            sliderEle.classList.add("boxes");
            sliderEle.innerHTML = arr[i];
            

            let dotEle = document.createElement("div");
            dotEle.classList.add("dots");

            if(i == 0){
                dotEle.classList.add("selected");
                sliderEle.classList.add("show");
            }

            holder.appendChild(sliderEle);
            dotHolder.appendChild(dotEle);
        }


        node.appendChild(holder);
        node.appendChild(dotHolder);

        let leftToggle = document.createElement("span");
        leftToggle.innerHTML = "<";

        leftToggle.onclick = function(){
            let a = document.getElementsByClassName("dots");
            let b = document.getElementsByClassName("boxes");
            for(let i=0; i<a.length;i++){
                if(a[i].classList.contains("selected")){
                    a[i].classList.remove("selected");
                    b[i].classList.remove("show");
                    if(i-1 < 0){
                        a[a.length-1].classList.add("selected");
                        b[a.length-1].classList.add("show");
                    }
                    else{
                        a[i-1].classList.add("selected");
                        b[i-1].classList.add("show");
                    }
                    break;
                }
            }
        }

        let rightToggle = document.createElement("span");
        rightToggle.innerHTML = ">";

        rightToggle.onclick = function(){
            let a = document.getElementsByClassName("dots");
            let b = document.getElementsByClassName("boxes");
            for(let i=0; i<a.length;i++){
                if(a[i].classList.contains("selected")){
                    a[i].classList.remove("selected");
                    b[i].classList.remove("show");
                    if(i+1 > a.length-1){
                        a[0].classList.add("selected");
                        b[0].classList.add("show");
                    }
                    else{
                        a[i+1].classList.add("selected");
                        b[i+1].classList.add("show");
                    }
                    break;
                }
            }
        }

        node.appendChild(leftToggle);
        node.appendChild(rightToggle);


        var styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = '.boxes { display: none; position:absolute; } .show{display: block;} .dots{height: 15px;width: 15px;border-radius:50%;display:inline-block;background-color:gray;margin-top:20px;} .selected{background-color:black;}';
        document.head.appendChild(styleSheet);


    }
}

export { createSlider }