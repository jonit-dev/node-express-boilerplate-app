import { Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';

import { Loading } from '../Generic/Loading';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

export const DefaultScreen = (props: IProps) => {
  const classes = useStyles();
  const isLoading = useSelector<any, any>(state => state.uiReducer.isLoading);

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {props.title}
      </Typography>
      <Divider />
      <br />
      <br />
      {isLoading.status && isLoading.key === "default" ? (
        <Loading />
      ) : (
        props.children
      )}
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      padding: theme.spacing(3, 2)
    }
  })
);
