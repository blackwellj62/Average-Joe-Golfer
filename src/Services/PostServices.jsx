export const getAllPosts = () => {
    return fetch('http://localhost:8088/posts?_expand=category&_embed=likes').then(res => 
        res.json())
}

export const getPostsById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}?&_expand=user&_expand=category&_embed=likes`).then(res =>
        res.json()
    )
}

export const newPost = (post) => {
    return fetch('http://localhost:8088/posts',{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(post)
    })
}