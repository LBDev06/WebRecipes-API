export class NotAllowedError extends Error {
    constructor(){
        super ('Action not allowed.')
    }
}