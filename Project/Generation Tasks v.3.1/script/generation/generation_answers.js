// Generation answer for 1 type
function type_1_get_answer(combinations, placeWord) {
    return (combinations[placeWord - 1])
}

// Generation answer for 3 type
function pairVowels(vowels, letter) {
    let pairs = [];
    for (let x in vowels) {
        let s = ''
        pairs.push(s.concat(vowels[x], letter))
    }

    return pairs
}

// Function for permutation
function permutator(inputArr) {
    var results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];
        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}

function type_3_get_answer(length, text, letter) {
    let vowels = ['А', 'О', 'Э', 'Е', 'И', 'Ы', 'У', 'Ё', 'Ю', 'Я']
    let answer = 0
    let allPerm = permutator(text)

    for (let i in allPerm) {
        let str = allPerm[i].join('')
        if (str[0] != letter) {
            let pairs = pairVowels(vowels, letter)

            let f = true
            for (let x in pairs) {
                if (str.indexOf(pairs[x]) != -1) {
                    f = false
                    break
                }
            }

            if (f) {
                answer++
            }
        }
    }

    return answer
}