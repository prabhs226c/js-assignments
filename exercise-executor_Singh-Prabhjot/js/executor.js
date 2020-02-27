function execute(operation,operand1,operand2)
{
    let result

    function add()
    {
        return result = operand1+operand2
    }
    function subtract()
    {
        return result = operand1-operand2
    }
    function multiply()
    {
        return operand1*operand2
    }

    switch(operation)
    {
        case 'ADD':
            return add()
        break;
        case 'SUB':
            return subtract()
        break;
        case 'MUL':
            return multiply()
        break;
        case div:
            return  div(operand1,operand2)
            break;
        case 'chaloupe':
            return('unknown operation name')
        break;
        case 666:
            return('unknown operation type')
        break; 
    }
}
