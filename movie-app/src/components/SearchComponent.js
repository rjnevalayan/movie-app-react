import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SearchComponent({ onChange }){

    return(
        // <>
        //     <Box
        //         direction="row" spacing={2}
        //         component="form"
        //         sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        //         noValidate
        //         autoComplete="off"
        //         >
        //         <TextField id="outlined-basic" label="Title" variant="outlined" onChange={onChange}/>
        //         <TextField id="outlined-basic" label="Year" variant="outlined" />
            
                // <Autocomplete
                // disablePortal
                // options={top100Films}
                // sx={{ width: 300 }}
                // renderInput={(params) => <TextField {...params} label="Plot" />}
                // />
        //     </Box>
        // </>

        
        <Stack 
            style={{ 
                padding: 0, 
                backgroundColor: 'rgba(24, 24, 24, 1)',
                direction: "row",
                justifyContent: "center",
                paddingTop: 5,
                paddingBottom: 5, 
                display: "flex",
                alignItems: "center"
            }}
            > 
                <TextField 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    onChange={onChange}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Year" 
                    variant="outlined" 
                />
                <Autocomplete
                    disablePortal
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} 
                    label="Plot" />}
                />
            <Button variant="contained">Search</Button>
        </Stack>

    )
  }