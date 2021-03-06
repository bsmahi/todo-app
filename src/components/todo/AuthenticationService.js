class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        // console.log(`${username}`)
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }
}

export default new AuthenticationService()
