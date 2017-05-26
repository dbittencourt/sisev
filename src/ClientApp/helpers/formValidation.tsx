const validateName = name => {
    if (!name)
        return "Campo obrigatório";
    if (name.length < 4)
        return "Muito curto";
    return "";
}

const validateNotEmpty = text => {
    if (!text)
        return "Campo obrigatório";
    return "";
}

const validateEmail = email => {
    if (!email)
        return "Campo obrigatório";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
        return "Email inválido";
    return "";
}

const validateDepartment = department => {
    return "";
}

const validatePassword = (password, passwordConfirm = null) => {
    if (!password)
        return "Campo obrigatório";
    if (password != passwordConfirm && passwordConfirm != null)
        return "Confirmação diferente da senha";
    return "";
}

const validateGlobal = global => {
    return "";
}

const validationFuncs = {
    'email': validateEmail,
    'name': validateName,
    'firstName': validateName,
    'lastName': validateName,
    'department': validateDepartment,
    'password': validatePassword,
    'passwordConfirm': validatePassword,
    'username': validateNotEmpty,
    'passwordLogin': validateNotEmpty,
    'global': validateGlobal,
    'remember': validateGlobal
}


const validate = (values, comparator?) => {
    var errors = {};
    var keys = Object.keys(values);
    if (keys.length < 2){
        let key = keys[0];
        if (key == "password"){
            errors[key] = validationFuncs[key](values[key]);
            if (comparator != undefined && comparator != null)
                errors["passwordConfirm"] = validationFuncs[key](values[key], comparator);
        }
        else if (key == "passwordConfirm"){

            errors[key] = validationFuncs[key](comparator, values[key]);
        }
        else
            errors[key] = validationFuncs[key](values[key]); 
    }
    else
    {
        keys.forEach(key => {
            if (key == "password"){
                errors[key] = validationFuncs[key](values[key]);
                errors["passwordConfirm"] = validationFuncs[key](values[key], values["passwordConfirm"]);
            }
            else if (key == "passwordConfirm")
                errors[key] = validationFuncs[key](values["passwordConfirm"], values[key]);
            else
                errors[key] = validationFuncs[key](values[key]);
        });
    }
    
    return errors;
}

export default validate;