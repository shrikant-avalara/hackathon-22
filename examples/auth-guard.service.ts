export class AuthGuardService {
    logoff() {
        throw new Error('Method not implemented.');
    }

    foo() {
        return {
            bar:{baz(){return {isLoggedIn:true}}}
        }
    }

}