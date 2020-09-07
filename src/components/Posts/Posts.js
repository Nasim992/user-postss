import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import "./Posts.css"


const Posts = (props) => {
    const { title, id, body } = props.post;
    console.log(props.post);
    console.log(title);

    const useStyles = makeStyles({

        root: {
        minWidth: 280,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 15,
        },
        pos: {
          marginBottom: 12,
        },
      });
      const classes = useStyles();
    
    return (
        <div className = "posts-container">
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Id:{id}
        </Typography>
        <Typography variant="h5" component="h2">
            Title: {title}
        </Typography>
        <Typography variant="body2" component="p">
            {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to = {`posts/${id}`}><Button variant="contained" color="primary" size="small">See More</Button></Link>
      </CardActions>
    </Card>
          </div>
    );
};

export default Posts;