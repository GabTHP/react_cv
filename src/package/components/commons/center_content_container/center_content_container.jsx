import * as React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { styles } from './center_content_container_styles';

const useStyles = makeStyles(styles);

export const CenterContentContainer = ({ classes: receivedClasses = {}, children, minus = 0 }) => {
    const classes = useStyles({ minus });
    return <div className={cn(classes.container, receivedClasses.container)}>{children}</div>;
};
