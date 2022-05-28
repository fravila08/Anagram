exports.anagramsFor = function(word, listOfWords) {
    let anagrams=[]
    for (i=0;i<listOfWords.length; i++){
        counter=0
        //console.log(listOfWords[i])
        for (j=0; j<word.length;j++){
            //console.log(word[j])
            let compareWord=listOfWords[i].split(word[j]).length-1
            //console.log(compareWord)
            let compareVar=word.split(word[j]).length-1
            //console.log(compareVar)
            if(compareVar===compareWord){
                counter++
            }
        }
        if(counter===listOfWords[i].length){
            anagrams.push(listOfWords[i])
        }
    }
    return(anagrams)
};

//anagramsFor("threads", listOfWords)