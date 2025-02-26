let count =0;
function add(){
  count++;
   counterUpdate();
}
function substract(){
 count--;
 counterUpdate();
}
function reset(){
    count = 0;
    counterUpdate()
}
function counterUpdate(){
  document.getElementById('h1').innerHTML=count;
}
