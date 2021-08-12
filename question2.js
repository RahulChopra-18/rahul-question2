function traverse(arr,instruction){
var i=0,j=0;
    for(let i=0;i<instruction.length;i++){
        if(instruction.charAt(i)=='d')
        arr[i++][j];
        else if(instruction.charAt(i)=='u')
        arr[i--][j];
        else if(instruction.charAt(i)=="r")
        arr[i][j++];
        else
        arr[i][j--];
    }
    return arr[i][j];
    }