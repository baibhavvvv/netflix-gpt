export const checkvalidData = (email,password) => {
    const isEmailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailvalid) return "Email ID is not valid."
    if(!isPasswordvalid) return "Password is not valid."

    return null;
};