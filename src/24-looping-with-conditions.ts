export {};

function onlyTheAces(arr: string[]) {
    let newArray: string[] = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "Ace") {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

//forEach loop
//const result: string[] = [];
//arr.forEach((it) => {
    //if(it === 'Ace') {
        //result.push(it);
    //}
//});
//return result;


//use filter()
//return arr.filter((it) => {
    //return it === 'Ace';
//})

//====================================================

//type T_FaceCards = "Ace" | "King" | "Queen" | "Jack" --- means create my own type (T - type)
//function checkAce(faceCard: T_FaceCards) {
    //return (T_FaceCards = "Ace");
//}
//return arr.filter(checkAce);


console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
