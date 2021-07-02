import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FaTimes } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';

const  AlertDialog = ({ information })=>{
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleClick}>{ information }</button>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style = {{position: 'relative'}}>
          <FaTimes
            onClick={handleClick} 
            style={{position: 'absolute', top: '10px', right: '10px', transform: 'scale(1.5)'}}
          />
        </div>
        
        <DialogTitle id="alert-dialog-title">{"Hospitais de Referência"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul style= {{listStyle: 'none'}}>
              <h4>Rio de Janeiro</h4>
              <li>- Copa D'Or</li>
              <li>- Quinta D'Or</li>
              <li>- Barra D'Or</li>
              <li>- Casa de Saúde São José</li>
              <li>- Clínica São Vicente da Gávea</li>
              <li>- Hospital Vitória (Barra)</li>
              <li>- Perinatal Laranjeiras</li>
              <li>- Perinatal Barra</li>
            
              <h4>São Paulo</h4>
              <li>- Hospital Alemão OsWaldo Cruz</li>
              <li>- Hospital 9 de Julho</li>
              <li>- Hospital São Luiz - Anália Franco / Itaim / Morumbi / S.C Sul</li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{margin: '0 auto'}}>
          <button onClick={handleClick}>
            <span><MdFileDownload/></span> Baixe lista completa de hospitais
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;