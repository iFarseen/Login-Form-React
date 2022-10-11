 export const validate = (data, type) => {


    const errors = {};

    if (!data.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Invalid email address"
    } else {
        delete errors.email;
    }

    if(!data.password) {
        errors.password = "Password is required"
    } else if (data.password.length < 6) {
        errors.password = "Password must be 6 characters or more"
    } else {
        delete errors.password;
    }

    
    if (type === "signup") {
        if (!data.name.trim()) {
            errors.name = "Name required"
        } else {
            delete errors.name;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm the password"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password do not match"
        } else {
            delete errors.confirmPassword;
        }
    
        if (data.isAccepted) {
            delete errors.isAccepted;
        } else {
            errors.isAccepted = "Accept our regulations"
        }
    }

    return errors;
}