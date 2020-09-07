import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';
import './PostDetails.css'

const PostDetails = () => {
    const { postId } = useParams();
    const[postDetail,setPostDetail]=useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, []);
    const useStyles = makeStyles({
        root: {
          minWidth: 280,
            color: 'white',
            textAlign: 'center',
            backgroundColor:'lightGray'
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        pos: {
          marginBottom: 15,
        },
        body:{
            fontSize:20,
        },
        id: {
            color: 'blue'
        }
      });
      const classes = useStyles();
    return (
        <div className = "postDetails-container">
            
            <div className = "post-card-container">
                
            <h1>Post Details</h1>
            <Card className={classes.root} variant="outlined">
            <CardContent>
            <Typography className={classes.id} color="textSecondary" gutterBottom>
                UserId: {postDetail.userId}
            </Typography>
            <Typography className={classes.id} color="textSecondary" gutterBottom>
                Id: {postDetail.id}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Title: {postDetail.title}
            </Typography>
            <Typography className={classes.body} color="textSecondary" gutterBottom>
            Body: {postDetail.body}
            </Typography>
            </CardContent>
                </Card>
                <Comments id={postId}></Comments>
            </div>
        </div>
    );
};

export default PostDetails;