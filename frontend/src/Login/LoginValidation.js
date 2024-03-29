function validation(values) { // Modifiez le paramètre pour correspondre à la déclaration
    let errors = {}; // Modifiez la variable pour être des erreurs au lieu d'une erreur

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.email === "") {
        errors.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email";
    } else {
        errors.email = "";
    }

    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, and one number";
    } else {
        errors.password = "";
    }

    return errors; // Modifiez le retour pour être des erreurs au lieu d'une erreur
}

export default validation;
