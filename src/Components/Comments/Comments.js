import React from 'react';

const Comments = (props) => {
    const {name, body, email} = props.comments;
    const commentStyle = {
        border: '1px solid gray',
        borderRadius: '10px',
        padding: '20px',
        width: '40%',
        margin: '10px 0',
        marginLeft:'30%'
    }
    return (
        <div style={commentStyle}>
            <h4>Name: <strong>{name}</strong></h4>
            <p><strong>Email: </strong>{email}</p>
            <p> <strong>Comment: </strong> {body}</p>

        </div>
    );
};

export default Comments;