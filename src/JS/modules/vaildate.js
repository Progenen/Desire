export default class Vaildate {
    constructor(form) {
        this.form = form
    }

    render() {
        const formVar = document.querySelector(this.form);
        const email = formVar.querySelector('[name="email"]');
        const message = formVar.querySelectorAll('[name="message"]');
        const phone = formVar.querySelectorAll('[name="phone"]');
        const custom = formVar.querySelectorAll('[name="custom"]');

        let formFlag;

        console.log(email);
    }
}