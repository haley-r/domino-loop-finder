let hardcodedArrayOfPairsFromShawn = [
    {
    donor_age: 23,
    donor_blood_type: "AB+",
    donor_height: 175,
    donor_name: "Shawn",
    donor_organ: "Kidney",
    donor_weight: 136,
    id: 1,
    matched: false,
    recipient_age: 26,
    recipient_blood_type: "B+",
    recipient_height: 300,
    recipient_name: "Kyle",
    recipient_organ: "Kidney",
    recipient_weight: 180,
    zip: 55102
    },
    {
        donor_age: 55,
    donor_blood_type: "A-",
    donor_height: 150,
    donor_name: "Susan",
    donor_organ: "Kidney",
    donor_weight: 180,
    id: 2,
    matched: false,
    recipient_age: 19,
    recipient_blood_type: "AB+",
    recipient_height: 180,
    recipient_name: "Katarina",
    recipient_organ: "Kidney",
    recipient_weight: 150,
    zip: 55102,
    },
    {
        donor_age: 21,
    donor_blood_type: "B+",
    donor_height: 180,
    donor_name: "Andreas",
    donor_organ: "Kidney",
    donor_weight: 160,
    id: 3,
    matched: false,
    recipient_age: 21,
    recipient_blood_type: "A-",
    recipient_height: 180,
    recipient_name: "Vithue",
    recipient_organ: "Kidney",
    recipient_weight: 160,
    zip: 55102,
    }
]

let hardcodedArrayOfPairs1 = [
    {donor_blood_type: "AB+", recipient_blood_type: "B+"},
    {donor_blood_type: "A-", recipient_blood_type: "AB+"},
    {donor_blood_type: "B+", recipient_blood_type: "A-"}
]

let hardcodedArrayOfPairs2 = [
    { donor_blood_type: "AB+", recipient_blood_type: "B+" },
    { donor_blood_type: "A-", recipient_blood_type: "AB+" },
    { donor_blood_type: "C+", recipient_blood_type: "A-" }
]

let hardcodedArrayOfPairs3 = [
    { donor_blood_type: "B+", recipient_blood_type: "A-" },
    { donor_blood_type: "A-", recipient_blood_type: "AB+" },
    { donor_blood_type: "AB+", recipient_blood_type: "B+" },
]

function findNextMatch(dominoArray, poolArray){
    //for each pair in the pool
    for (let i=0; i<poolArray.length; i++) {
        console.log('comparing candidate blood type:', poolArray[i].donor_blood_type, 'with last recipient in the chain blood type:', dominoArray[dominoArray.length-1].recipient_blood_type);
        //if pair donor matches last recipient blood type
        if (poolArray[i].donor_blood_type 
            === 
            dominoArray[dominoArray.length - 1].recipient_blood_type){
            console.log('it\'s a match! are we done, out of options, or need to run again?');
            // make new potentialmatch array
            let potentialMatchArray=dominoArray;
            potentialMatchArray.push(poolArray[i]);
            console.log('potentialMatchArray:', potentialMatchArray);
            //and remove from hypothetical pool(not actual pool)
            poolRemaining = poolArray;
            poolRemaining.splice(i,1);
            console.log('poolRemaining:', poolRemaining);
            //now figure out if we're done or if we should keep going
            if (potentialMatchArray[0].donor_blood_type
                ===potentialMatchArray[potentialMatchArray.length-1].recipient_blood_type){
                    console.log('completed the loop! returning potential match array');
                    console.log('match array is:', potentialMatchArray);
                    return true;
                }//end if loop complete
            else if (poolRemaining.length===0){
                console.log('ran out of options to check :( no organs 4 u');
                return false;
            }//end else if ran out of pool (i don't think we actually get here ever because of the loop limits)
            else {
                console.log('recurse! recurse!');
                findNextMatch(potentialMatchArray, poolRemaining);
            }//end else run it again
        }//end if initial match
        else{
            console.log('not a first level match. moving on.')
        }//end else no top level match
    }//end for loop
}

function createDominoArray(arrayOfPairs){
    //this is the pool. it starts the same as the given array, but we take things out of it as we go
    poolOfPairs=arrayOfPairs;
    //this array is the domino array. we only connect where donors and recipients match.
    //it's a complete domino array if the last donor in the array matches the first recipient in the array, and it's more than 2 long. start it off with first object of array of pairs
    let dominoArrayOfPairs = [];
    dominoArrayOfPairs.push(arrayOfPairs[0]);
    poolOfPairs.splice(0,1);
    //now loop through the pool and see if any matches to the domino
    //visualizing it as actual dominos: D=donor R=recipient
    // [D|R]-[D|R]-[D|R]-[D|R]-[D|R]
    //so we're just matching current recipient to next donor

    //run the recursive findNextMatch function   
    findNextMatch(dominoArrayOfPairs, poolOfPairs);

    //i didn't figure out how to return yet lol
}


// //this should work. it's the data you gave me
// createDominoArray(hardcodedArrayOfPairsFromShawn);
// //this should work, I just took out irrelevant stats but same data
createDominoArray(hardcodedArrayOfPairs1);
// //this shouldn't work. i replaced one of the blood types with 'C+'
// createDominoArray(hardcodedArrayOfPairs2);
// //this should work. it's the same as my first modified data set, in reverse order
// createDominoArray(hardcodedArrayOfPairs3);

