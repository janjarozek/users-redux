import React from 'react'
import PageHeader from '../components/PageHeader'
import TextList from '../components/TextList'

const content = [
    "Load 10 random users - loads new set of users.",
    "Reset - resets completely all users.",
    "Add 1 user - adds 1 user to existing set of users.",
    "Store users - saves users into Local Storage.",
    "Users Page - checks first if Local Storage contains saved users and then displays them."
]

export default function InfoPage() {
    return (
        <div>
            <PageHeader text="Home button description:"/>
            <TextList list={content} />
        </div>
    )
}
