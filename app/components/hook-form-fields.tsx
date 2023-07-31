import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type DecoratePhoneInputProps = {
  control: Control
  name: string
}

export const DecoratedPhoneInput: FC<DecoratePhoneInputProps> = (props) => (
  <Controller
    control={props.control}
    name={props.name}
    render={({ field: { ref, ...field } }) => (
      <PhoneInput
        {...field}
        inputProps={{
          ref,
          name: field.name,
          // required: true,
          // autoFocus: false,
        }}
        country={'ru'}
        // onlyCountries={['ru']}
        countryCodeEditable={false}
        specialLabel=""
        // enableSearch
      />
    )}
  />
)
