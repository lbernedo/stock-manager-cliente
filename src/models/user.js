export class User {
    /**
     * 
     * @param {Object<User>} param0 
     */
    constructor({ userId, username, password, employeeId, profileId,
        profileDesc, statusId, created }) {

        this.userId = userId;
        this.userName = username;
        this.password = password;
        this.employeeId = employeeId;
        this.profileId = profileId;
        this.profileDesc = profileDesc;
        this.statusId = statusId;
        this.created = created;
    }
}