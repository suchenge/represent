export default class UserSetting{
    constructor() {
        console.log("constructor user setting");
    }

    get theme() {
        return 'light';
    }
    set theme(value) {
        console.log("set user setting theme:" + value);
    }
}
