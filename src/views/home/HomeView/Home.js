import React, { useState, useEffect } from 'react';
import {
  Box, Button, useTheme, makeStyles
} from '@material-ui/core';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import { DialogField, EditList } from './components/Edit';
import PdfRender from './components/PdfRender';

const useStyles = makeStyles((theme) => ({
  pdfContent: {
    width: '1230px',
    height: '870px',
    '@media (max-width: 780px)': {
      width: '100%',
      height: '100%'
    }
  },
  pdfWrapper: {
    textDecoration: 'none',
    lineHeight: '30px',
    color: theme.palette.primary.main
  },
  btn: {
    margin: 'auto',
    display: 'flex'
  },
  alignButtons: {
    padding: theme.spacing(3, 0, 2),
    display: 'flex',
    textAlign: 'center',
    '@media (max-width: 780px)': {
      display: 'grid'
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    transactions: false,
    errorText: ''
  });

  useEffect(() => {
    const localTransactions = JSON.parse(localStorage.getItem('transactions'));

    if (localTransactions) {
      setState({ ...state, transactions: localTransactions });
    }
  }, []);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const updateLocalStorage = (item) => {
    const transactions = JSON.stringify(item);
    localStorage.setItem('transactions', transactions);

    setOpen(false);
  };

  const handleDelete = (deletedItem) => {
    const array = state.transactions !== deletedItem;

    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        transactions: array
      }));
    }, 300);

    updateLocalStorage(array);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.title !== 0 && state.title !== '') {
      let array = state.transactions;

      array = {
        title: state.title,
        description: state.description,
        name: state.name,
        date: Date.now()
      };

      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          transactions: array
        }));
      }, 300);

      updateLocalStorage(array);
    } else {
      setState({ ...state, errorText: 'Required field! \u{1F609}' });
    }
  };

  return (
    <Box data-testid="home-component">
      <PDFViewer className={classes.pdfContent}>
        <PdfRender theme={theme} transactions={state.transactions} />
      </PDFViewer>

      <Box className={classes.alignButtons}>
        <Button
          className={classes.btn}
          color="secondary"
          size="small"
          variant="outlined"
          startIcon={<SaveAltOutlinedIcon />}
        >
          <PDFDownloadLink
            className={classes.pdfWrapper}
            document={
              <PdfRender theme={theme} transactions={state.transactions} />
            }
            fileName="certificate.pdf"
          >
            Download Certificate
          </PDFDownloadLink>
        </Button>

        <EditList handleOpenDialog={handleOpenDialog} />

        <DialogField
          open={open}
          handleCloseDialog={handleCloseDialog}
          handleSubmit={handleSubmit}
          state={state}
          setState={setState}
          onHandleDeleteClick={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default Home;
