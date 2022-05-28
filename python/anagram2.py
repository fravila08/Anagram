# Don't forget to run the tests (and create some of your own)


def anagrams_for(word, list_of_words):
    anagrams=[]
    for i in list_of_words:
        counter= 0
        for j in word:
            compare_one=i.count(j)
            compare_two=word.count(j)
            if compare_one == compare_two:
                counter += 1
        if counter==len(i):
            anagrams.append(i)
    return anagrams