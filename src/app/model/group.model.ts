

export class Group{
    public groupId: number;
    public groupName: string;
    public groupDescription: string;

    constructor(groupId: number, groupName: string,groupDescription: string){
        this.groupId = groupId;
        this.groupName = groupName;
        this.groupDescription = groupDescription;
    }
}