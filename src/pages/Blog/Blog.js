import React, { Component } from 'react'

import './Blog.css'

class Blog extends Component {
    render() {
        return (
            <div className="blog-container-wrapper">
                <h1 className="blog-container-wrapper__title">Mwakazi's Blog</h1>
                <p className="blog-container-wrapper__description-one">Posts, tutorials and any other things I find interesting.</p>
                <p className="blog-container-wrapper__description-two">There are no posts yet.</p>
            </div>
        )
    }
}

export default Blog
