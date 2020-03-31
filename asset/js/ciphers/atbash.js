// Atbash Cipher
let atbashCipherList = {
    'A':'Z',
    'B':'y',
    'C':'X',
    'D':'W',
    'E':'V',
    'F':'U',
    'G':'T',
    'H':'S',
    'I':'R',
    'J':'Q',
    'K':'P',
    'L':'O',
    'M':'N',
    'N':'M',
    'O':'L',
    'P':'K',
    'Q':'J',
    'R':'I',
    'S':'H',
    'T':'G',
    'U':'F',
    'V':'E',
    'W':'D',
    'X':'C',
    'Y':'B',
    'Z':'A'
};

function atbash(cipher){
    let output="";
    let inputToUpperCase=cipher.toUpperCase(); 
    [...inputToUpperCase].forEach(c => {
        if(atbashCipherList.hasOwnProperty(c)){
            output += atbashCipherList[c];
        }else{
            output += c;
        }
    });
    return output;

}

