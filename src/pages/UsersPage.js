import React from 'react'
import PageHeader from '../components/PageHeader'

import Users from '../components/Users/container/Users'

export default function UsersPage() {
    return (
        <>
            <PageHeader text="Users list" />
            <Users />
        </>
    )
}
