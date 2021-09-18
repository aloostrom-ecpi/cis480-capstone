export class ClosedPost {
    _id!: String;
    postDate!: Date;
    author!: String;
    body!: String;
    reviewRequested!: Boolean;
    winningContractor!: String;
    closeDate!: Date;
}

export class Contractors {
    _id!: String;
    companyName!: String;
    firstname!: String;
    lastname!: String;
    username!: String;
    password!: String;
    email!: String;
    suspended!: Boolean;
    rating!: Number;
    externalLink!: String;
    notification!: [
        String,
        String
    ];
}

export class OpenPosts {
    _id!: String;
    postDate!: Date;
    body!: String;
    isParent!: Boolean;
    parentpost!: String;
}

export class ReportedPosts {
    _id!: String;
    postDate!: Date;
    author!: String;
    body!: String;
    reason!: String;
    adminReviewer!: String;
}

export class Reviews {
    _id!: String;
    responseDate!: Date;
    author!: String;
    body!: String;
    contractor!: String;
    rating!: Number;
}

export class User {
    _id!: String;
    firstname!: String;
    lastname!: String;
    username!: String;
    password!: String;
    email!: String;
    role!: Number;
    suspended!: Boolean;
    notification!: [
        String,
        String
    ];
}