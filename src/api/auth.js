import session from './session';

export default {
    login(email, password) {
        return session.post('/auth/login/', {
            email,
            password
        });
    },
    logout() {
        return session.post('/auth/logout/', {});
    },
    createAccount(username, password1, password2, email) {
        return session.post('/auth/registration/', {
            username,
            password1,
            password2,
            email
        });
    },
    changeAccountPassword(password1, password2) {
        return session.post('/auth/password/change/', {
            password1,
            password2
        });
    },
    sendAccountPasswordResetEmail(email) {
        return session.post('/auth/password/reset/', {
            email
        });
    },
    resetAccountPassword(uid, token, new_password1, new_password2) { // eslint-disable-line camelcase
        return session.post('/auth/password/reset/confirm/', {
            uid,
            token,
            new_password1,
            new_password2
        });
    },
    getAccountDetails() {
        return session.get('/auth/user/');
    },
    updateAccountDetails(data) {
        return session.patch('/auth/user/', data);
    },
    verifyAccountEmail(key) {
        return session.post('/auth/registration/verify-email/', {
            key
        });
    },
};