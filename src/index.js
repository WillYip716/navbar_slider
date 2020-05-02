import { createDropdown} from './dropdown'
import {createSlider} from './slider'

window.onload = function(){
    let arr = [["yahoo","https://www.yahoo.com/"],["google","https://www.google.com/"],["espn","https://www.espn.com/"]];
    let testnode = document.getElementById("test");
    createDropdown(testnode,arr);
    console.log("im in here");


    let arr2 = ["hello", "goodbye", "hello again", "goodbye again"];
    let testnode2 = document.getElementById("test2");
    createSlider(testnode2,arr2);

}