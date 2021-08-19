export class Utils {

    constructor() {
    }

    public static isValidURL(url: string): boolean {
        let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null);
    }

    public static generateShortUrl(seed: number): string {
        return seed + "TodoGud";
    }
}