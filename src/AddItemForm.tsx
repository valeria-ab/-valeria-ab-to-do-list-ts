import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Button, IconButton, TextField} from '@material-ui/core';
import {AddBox} from '@material-ui/icons';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}



function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }
    const addItem = () => {
        let trimmedTitle = title.trim();
        if (trimmedTitle !== "") {
            props.addItem(trimmedTitle);
        } else {
            setError("Title is required");
        }
        setTitle("");
    }
    return <div>
        <TextField
            variant={'outlined'}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            label={'Title'}
            error={!!error} //---не понятно
            helperText={error}
        />
    {/*<input value={title}
           onChange={onChangeHandler}
           onKeyPress={onKeyPressHandler}
           className={error ? "error" : ""}
    />*/}
   {/* <button onClick={addItem}>+</button>*/}
   <IconButton  color={"primary"}
                onClick={addItem}>
<AddBox/>
   </IconButton>
   {/*<Button
       variant={"contained"}
       color={"primary"}
       onClick={addItem}
   >+</Button>*/}


 {/*   {error && <div className="error-message">{error}</div>}*/}
</div>
}

export default AddItemForm;