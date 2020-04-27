import React, { SFC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

// add error action
import { addError } from '../../utils/Api'

// error interface
import { IError } from '../../store/errorsModule'

// styled components
import Input from '../../components/Input'
import Wrapper from '../../layouts/Wrapper'
import StyledForm from '../../layouts/Form'
import TextArea from '../../components/TextArea'
import SubmitButton from '../../components/SubmitButton'
import MainPageButton from '../../components/MainPageButton'
import ButtonsContainer from '../../layouts/ButtonsContainer'

interface IErrorPage {
  addError: (data: IError) => void
}

const ErrorPage: SFC<IErrorPage> = ({ addError }) => {
  const { register, handleSubmit, errors, reset } = useForm<IError>()

  const onSubmit = handleSubmit((props) => {
    const data: IError = { ...props, createdAt: new Date() }
    addError(data)
    reset()
  })

  return (
    <Wrapper>
      <StyledForm onSubmit={onSubmit}>
        <Input
          name="error_heading"
          label="Brief description of the error"
          placeholder="npm installation does not work"
          ref={register({ required: true })}
          error={errors.error_heading}
        />

        <TextArea
          name="error_description"
          label="Detailed description of the error"
          placeholder="Errors when entering the npm install command"
          ref={register({ required: true })}
          error={errors.error_description}
        />

        <TextArea
          name="error_solution"
          label="Error solution"
          placeholder="Update npm to the latest version"
          ref={register({ required: true })}
          error={errors.error_solution}
        />

        <TextArea
          name="error_code"
          label="Code with a problem and solution (optional)"
          placeholder="sudo npm install -g npm"
          ref={register({ required: false })}
        />

        <ButtonsContainer>
          <MainPageButton />
          <SubmitButton />
        </ButtonsContainer>
      </StyledForm>
    </Wrapper>
  )
}

export default compose(connect(null, { addError }))(memo(ErrorPage))
