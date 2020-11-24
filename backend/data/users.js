import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Toni Nowel',
        email: 'toni@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Devia Chicilia',
        email: 'chi@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
]


export default users
