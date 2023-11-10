import React, { useState, useEffect } from 'react'


export default function Effect3() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [resourceType])



    const posts = (bool) => {

        if (bool == true) {
            return (
                items.map(item => {

                    return (
                        <div key={item.id} style={{ marginBottom: '15px' }}>
                            <div style={{ border: 'solid 5px white' }}>
                                <p>User ID:{JSON.stringify(item.userId)}</p>
                                <p>Post ID:{JSON.stringify(item.id)}</p>
                                <p>Title: {JSON.stringify(item.title)}</p>
                                <p>{JSON.stringify(item.body)}</p>
                            </div>
                        </div>
                    )

                })
            )
        } else {
            return <p>Error 404 - Not Found</p>
        }


    }

    const users = (bool) => {
        if (bool == true) {
            return (
                items.map(item => {

                    return (
                        <div key={item.id} style={{ width: '800px', marginBottom: '15px', textAlign: 'left' }}>
                            <div style={{ border: 'solid 5px white' }}>
                                <p>ID:{JSON.stringify(item.id)}</p>
                                <p>{JSON.stringify(item.name)}</p>
                                <p>@{JSON.stringify(item.username)}</p>
                                <p>{JSON.stringify(item.email)}</p>
                                {
                                    item.address && (
                                        <div>
                                            <h3>Address: </h3>
                                            <p>{JSON.stringify(item.address.street)}</p>
                                            <p>{JSON.stringify(item.address.suite)}</p>
                                            <p>{JSON.stringify(item.address.city)}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )

                })
            )

        } else {
            return (
                <p>Error 404 - Not Found</p>
            )
        }

    }

    const comments = (bool) => {

        if (bool == true) {
            return (
                items.map(item => {

                    return (
                        <div key={item.id} style={{ marginBottom: '15px' }}>
                            <div style={{ border: 'solid 5px white' }}>
                                <p>ID:{JSON.stringify(item.id)}</p>
                                <p>Subject:{JSON.stringify(item.name)}</p>
                                <p>Email: {JSON.stringify(item.email)}</p>
                                <p>{JSON.stringify(item.body)}</p>
                            </div>
                        </div>
                    )

                })
            )
        } else {
            return <p>Error 404 - Not Found</p>
        }
    }

    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{ maxWidth: '800px', display: 'flex', gap: '15px', justifyContent: 'space-between' }}>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {resourceType == 'posts' && posts(true)}
            {resourceType == 'users' && users(true)}
            {resourceType == 'comments' && comments(true)}
        </div>
    )
}




