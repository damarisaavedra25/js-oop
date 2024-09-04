class FancyLog {
    decorator = 'string';
    #message;

    set #decoratedMessage(message) {
        this.#message = message;
    }
    get #decoratedMessage() {
        return `${this.decorator} ${this.#message}`;
    }

    log(message) {
        this.#decoratedMessage = message;
        console.log(this.#decoratedMessage);
    }
}

const fancyLog = new FancyLog();
fancyLog.log("public and private class fields work");
