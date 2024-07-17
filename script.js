let turn=1;

const players =  [
    {
        'name': 'Player 1',
        'spaces': Array(9).fill(false),
        'winner': false
    }, 
    {
        'name': 'Player 2',
        'spaces': Array(9).fill(false),
        'winner':false
    }

];

document.getElementById('clear').addEventListener('click',clear);

for(let i=0; i<9;i++){
    const button =document.createElement('div');
    button.setAttribute('class','space');
    button.addEventListener('click',clickHandler);
    document.getElementById('grid').append(button);
}


function clickHandler(e){
 const index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
 const x =document.createElement('span');
 x.innerHTML='X'
 x.setAttribute('class', 'ex')
 const z =document.createElement('span');
 z.setAttribute('class', 'zero')
z.innerHTML='0'
 if(turn%2){
    e.target.append(x); 
    players[0].spaces[index]=true;  
 }
 
 else{
    e.target.append(z);
    players[1].spaces[index]=true;  
 }
 turn++;
 e.target.setAttribute('class', 'noClickSpace')
 verifyWin();

}

function clear(){
    players[1].spaces.fill(false);
    players[0].spaces.fill(false);
    Array.prototype.forEach.call(document.getElementById('grid').children, 
function (element){
    element.setAttribute('class','space');
    element.innerHTML=''
    turn=1;
}
);
players[0].winner=false;
players[1].winner=false;
}

function verifyWin(){    
   for(let i of players){
    for(let j of combinations){
        if(i.spaces[j[0]] && i.spaces[j[1]] && i.spaces[j[2]]){
            alert('The Winner is '+i.name);
            Array.prototype.forEach.call(document.getElementById('grid').children, 
             (element)=>element.setAttribute('class','noClickSpace'))
             i.winner=true;
        }
        
    }
   }
   if(turn>9 &&players[0].winner==players[1].winner){
    alert('It has been a Draw' );
    }
}


