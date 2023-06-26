import React from 'react'
import { Stack } from '@mui/material'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <Stack className='overflow-y-auto' spacing={2} direction='row' sx={{ 
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column'}
      }}>
        <button>home</button>
        <button>Training and dataset</button>

    </Stack>
  )
}

export default Sidebar