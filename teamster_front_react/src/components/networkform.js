import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'


const NetworkForm = () => {

    const [network, setNetwork] = useState({name: ''})

    const handleOnChange = () => {
        return null
    }

    return <div className='network-form' style={{gridArea: '2/2/span 3/span 18'}}>
        <FormControl>
            <InputLabel>Name</InputLabel><br />
            <TextField multiline={true} rows={12} variant={'filled'} value={network.name} onChange={handleOnChange} name='Name' className='textarea'/> <br />
        </FormControl>
    </div>
}

export default NetworkForm