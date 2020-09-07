import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './CommentsDetails.css'

const Commentsdetail = (props) => {
    const { name, body, email, id } = props.comment;
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
    }));
    const classes = useStyles();
    return (
        <div className= "commentsDetails-container">
           
            <div className={classes.root}>
                <Avatar alt="Remy Sharp" src={`http://graph.facebook.com/v2.5/${100+id}/picture?height=200&height=200`} />
            </div>
            <div style={{ textAlign: 'justify', width: '500px', background: 'lightGray', padding:'10px',borderRadius: '20px',marginLeft:'10px',}}>
           <p><strong>{name}</strong></p>
                <p> <a href="#">{email}</a> </p>
            <p>{body}</p>
           </div>
        </div>
    );
};

export default Commentsdetail;