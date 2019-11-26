let db = {
    users: [
        {
        userId: '',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '',
        imageUrl: '',
        bio: '',
        website: '',
        location: ''
    }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'This is a sample scream',
            createdAt: '2019-10-04T14:43:42.124Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: '',
            body: 'nice one mate',
            createdAt: ''
        }
    ],
    notifications: [
        {
            recepient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'fdksfdhjdfnk',
            type: 'like | comment',
            createdAt: '',
        }
    ]
};

const userDetails = {
    //Redux data
    credentials: {
        userId: '',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '',
        imageUrl: '',
        bio: 'Hello, my name is user',
        website: 'https://user.com',
        location: 'London, UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: ''
        },
        {
            userHandle: 'user',
            screamId: ''
        }
    ]
}

// this is a good reference point, you dont have to open Firebase all the time
// This is a good practice because each time we get a scream, we dont want to check the comments that will have the id of a scream and count them and return that number because Firebase charges you on the amount of reads that you do. So you are trying to minimise the amount to reads that you execute each time that user sends a request. So if you store these here already, you will avoid too many reads on you database and be charged less 