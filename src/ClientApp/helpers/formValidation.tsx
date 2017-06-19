const validateName = name => {
    if (!name)
        return "Campo obrigatório";
    if (name.length < 4)
        return "Muito curto";
    return undefined;
}

const validateNotEmpty = text => {
    if (!text)
        return "Campo obrigatório";
    return undefined;
}

const validateEmail = email => {
    if (!email)
        return "Campo obrigatório";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
        return "Email inválido";
    return undefined;
}

const validateDepartment = department => {
    return undefined;
}

const validatePassword = (password) => {
    if (!password)
        return "Campo obrigatório";
    return undefined;
}

const validatePasswordConfirm = (values) => {
    if (values["password"] != values["passwordConfirm"])
        return "Confirmação diferente da senha";
    return undefined; 
}

const validateGlobal = global => {
    return undefined;
}

const validationFuncs = {
    "email": validateEmail,
    "name": validateName,
    "firstName": validateName,
    "lastName": validateName,
    "department": validateDepartment,
    "password": validatePassword,
    "passwordConfirm": validatePasswordConfirm,
    "username": validateNotEmpty,
    "global": validateGlobal,
    "remember": validateGlobal,
    "cpf": validateGlobal
}

export const validateField = (field, value, allValues) => {
    if (field == "passwordConfirm")
        return validationFuncs[field](allValues);
    return validationFuncs[field](value);
}