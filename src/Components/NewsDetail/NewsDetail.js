import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

const NewsDetail = () => {
    const {newsId} = useParams()
    const [detail, setDetail] = useState([])
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${newsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDetail(data)
        })
    },[])
    const {title, body} = detail;
    const [comments, setComments] = useState([])
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${newsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setComments(data)
        })
    },[])

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const classes = useStyles();
    return (
        <div>
        <div style={{width:"50%", marginLeft:"20%", padding: "5%"}}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h2" component="h1">
                        {title}
                    </Typography>
                    <br/>
                    <Typography variant="body1" component="h4">
                        {body}
                    <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
        <h2 style={{marginLeft:'33%'}}>All Comments</h2>
        <div>
            {
                comments.map(comment => <Comments comments={comment}></Comments>)
            }
        </div>
        </div>
    );
};

export default NewsDetail;