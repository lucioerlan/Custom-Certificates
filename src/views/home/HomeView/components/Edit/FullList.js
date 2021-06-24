import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@material-ui/core';
import { Category } from './Category';
import { ListAction } from './ListAction';

export const FullList = ({ transactions, onHandleDeleteClick }) => {
  return (
    <List>
      <ListItem key={+transactions.date}>
        {transactions !== false ? (
          <>
            <Category iconName="assignment_turnedIn" item={transactions} />
            <ListAction
              onHandleDeleteClick={onHandleDeleteClick}
              item={transactions}
            />
          </>
        ) : null}
      </ListItem>
    </List>
  );
};

FullList.propTypes = {
  transactions: PropTypes.object.isRequired,
  onHandleDeleteClick: PropTypes.func.isRequired,
};
