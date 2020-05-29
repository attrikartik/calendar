import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

export default function AlertDialog( props ) {

  const [open, setOpen] = React.useState(true)  
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [guests, setGuests] = React.useState('')

    const handleInput = event => {
      const { name, value } = event.target
      if(name === 'title'){
        setTitle(value)
      }
      else if( name === 'description'){
        setDescription(value)
      }
      else{
        setGuests(value)
      }
    }

    const handleClose = () => {
       if(title != ''){
        props.eventHandle(title,description,guests)
        setOpen(false);
      }else{
        alert('Please fill title')
      }
    }
  
    const handleCancel = () => {
        setOpen(false)
   };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >   
        <DialogTitle id="alert-dialog-title">EVENT</DialogTitle>
          <DialogContent>         
            <TextField id="title" label="TITLE **" name='title' value={title} onChange={handleInput}/><br/>
            <TextField id="description" label="DESCRIPTION" value={description} name='description' onChange={handleInput}/><br/>
            <TextField id="guests" label="ADD Guests" value={guests} name='guests' onChange={handleInput}/>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
