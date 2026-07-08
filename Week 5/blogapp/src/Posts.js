import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                new Post(
                    1,
                    "Welcome to the Student Management Portal",
                    "This project is developed using React. It allows administrators and students to manage academic information efficiently through a user-friendly interface."
                ),
                new Post(
                    2,
                    "Features of the Application",
                    "The Student Management Portal includes student registration, attendance management, score calculation, and course management to simplify academic activities."
                ),
                new Post(
                    3,
                    "React Component Lifecycle",
                    "This page demonstrates the React component lifecycle. The componentDidMount() method is used after the component is rendered, and componentDidCatch() is used for handling runtime errors."
                ),
                new Post(
                    4,
                    "Benefits of React",
                    "React provides reusable components, Virtual DOM, efficient rendering, and better application performance, making modern web development easier."
                ),
                new Post(
                    5,
                    "Future Enhancements",
                    "Future improvements include JWT authentication, REST API integration using Spring Boot, database connectivity, and cloud deployment."
                )
            ]
        };
    }

    componentDidMount() {
        console.log("Student Management Portal posts loaded successfully.");
    }

    componentDidCatch(error, info) {
        alert("An error occurred: " + error);
        console.error(error, info);
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Student Management Portal Blog</h1>

                {this.state.posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;