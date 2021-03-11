export const required = (value) => {
    if (value) return undefined;
    return 'Field is required';
}

export const isMessage = (value) => {
    if (required(value)){
        return 'Field is required';
    }
    let result = value.match(/^[\n\s]*$/) || [];
    if (result.length>0){
        return 'Field is required';
    }
    return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length <= maxLength) return undefined;
    return `Max length is ${maxLength}`;
}

