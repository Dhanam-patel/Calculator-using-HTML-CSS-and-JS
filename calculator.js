let FinalValue = '';
        let result;
        document.querySelector('#one').onclick = function () {
            FinalValue = FinalValue + '1';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#two').onclick = function () {
            FinalValue = FinalValue + '2';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#three').onclick = function () {
            FinalValue = FinalValue + '3';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#four').onclick = function () {
            FinalValue = FinalValue + '4';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#five').onclick = function () {
            FinalValue = FinalValue + '5';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#six').onclick = function () {
            FinalValue = FinalValue + '6';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#seven').onclick = function () {
            FinalValue = FinalValue + '7';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#eight').onclick = function () {
            FinalValue = FinalValue + '8';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#nine').onclick = function () {
            FinalValue = FinalValue + '9';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#zero').onclick = function () {
            FinalValue = FinalValue + '0';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#addition').onclick = function () {
            FinalValue = FinalValue + '+';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#substraction').onclick = function () {
            FinalValue = FinalValue + '-';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#multiplication').onclick = function () {
            FinalValue = FinalValue + '*';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#division').onclick = function () {
            FinalValue = FinalValue + '/';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#dot').onclick = function () {
            FinalValue = FinalValue + '.';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#opening').onclick = function () {
            FinalValue = FinalValue + '(';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#closing').onclick = function () {
            FinalValue = FinalValue + ')';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#C').onclick = function () {
            FinalValue = '';
            document.querySelector('.display').value = FinalValue;
        }
        document.querySelector('#equals').onclick = function () {
            result = eval(FinalValue);
            FinalValue = result;
            document.querySelector('.display').value = FinalValue;
        }