import React, { Component } from 'react';
import axios from 'axios';

export default function ViewAll() {
    const [lessons, setLessons] = React.useState([]);

    React.useEffect(() => {
        retrieveLessons();
    }, []);

    function retrieveLessons() {
        axios.get('http://localhost:8000/lessons').then((res) => {
            if (res.data.success) {
                setLessons(res.data.existingLessons);
            }
        });
    }

    return (
        <div className="container">
            <p>All Lessons</p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Lesson Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map((lessons, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <a href={`/viewlesson/${lessons._id}`} style={{ textDecoration: 'none' }}>
                                    {lessons.lessonName}
                                </a>
                            </td>
                            <td>{lessons.image}</td>
                            <td>{lessons.payment}</td>
                            <td>{lessons.category}</td>
                            <td>
                                <a className="btn btn-warning" href={`/editlesson/${lessons._id}`}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" href="#">
                                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-success">
                <a href="/addlesson" style={{ textDecoration: 'none', color: 'white' }}>
                    Create New Post
                </a>
            </button>
        </div>
    );
}