import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const AllNews = (props) => {
    const { title, body, id} = props.news;
    const history = useHistory();
    const detail = (newsId) => {
        const url = `/detail/${newsId}`;
        history.push(url);
    }
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
        <div style={{width:"50%", marginLeft:"20%", padding: "5%"}}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <br/>
                    <Typography variant="body2" component="p">
                        {body}
                    <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => detail(id)} variant="contained" color="secondary">See Details</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default AllNews;