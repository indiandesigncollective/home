//ALL USER INFO//

import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Arundhati Bala',
        email: 'arun@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Siddh Bakshi',
        email: 'svb@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users