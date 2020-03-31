
let encodeBtn = document.querySelector('#encode');
let decodeBtn = document.querySelector('#decode');
let output = document.querySelector('#output');

encodeBtn.addEventListener('click', () => {
    let selection = isCipherSuiteSelected();
    if(selection){
        output.textContent = encode(selection.value, getText());
    }else{
        alert("ciphersuite is not selected!");
    }
});

decodeBtn.addEventListener('click', () => {
    let selection = isCipherSuiteSelected();
    if(selection){
        output.textContent = decode(selection.value, getText());
    }else{
        alert("ciphersuite is not selected!");
    }
});

function encode(cipherSuite, text){
    switch(cipherSuite){
        case 'atbash':
            return (atbash(text));
            break;
        default:
            console.log("Cipher not present!");
    }
}
function decode(cipherSuite, cipher){
    switch(cipherSuite){
        case 'atbash':
            return (atbash(cipher));
            break;
        default:
            console.log("Cipher not present!");
    }
}

function getText(){
    return document.querySelector('#userInput').value;
}

function isCipherSuiteSelected(){
    let chosenCipher ="";
    let selection = document.querySelector('input[name="cipher"]:checked');
    return selection;
}