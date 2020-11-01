export class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            info: this._info.textContent
        };
        return userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._info.textContent = data.job;
    }
}