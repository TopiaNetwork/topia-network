'use client'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

const AppTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: `#1F331F !important`,
  },
  '&.Mui-focused fieldset, &:hover fieldset': {
    borderColor: `#96FA96 !important`,
    borderWidth: '2px !important',
  },
  '& .MuiOutlinedInput-root': {
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
}))

export default AppTextField
