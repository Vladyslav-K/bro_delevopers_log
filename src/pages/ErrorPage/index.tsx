import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

// styled components
import Input from '../../components/Input'
import Wrapper from '../../layouts/Wrapper'
import TextArea from '../../components/TextArea'
import SubmitButton from '../../components/SubmitButton'
import MainPageButton from '../../components/MainPageButton'

type FormData = {
  error_heading: string
  error_description: string
  error_solution: string
}

const ErrorPage: SFC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = handleSubmit(props => {
    console.log(props)
  })

  return (
    <Wrapper>
      <StyledForm onSubmit={onSubmit}>
        <Input
          name="error_heading"
          label="Brief description of the error"
          placeholder="Enter here a brief description of the error"
          ref={register({ required: true })}
          error={errors.error_heading}
        />

        <TextArea
          name="error_description"
          label="Detailed description of the error"
          placeholder="Enter here a detailed description of the error"
          ref={register({ required: true })}
          error={errors.error_description}
        />

        <TextArea
          name="error_solution"
          label="Error solution"
          placeholder="Enter the solution here"
          ref={register({ required: true })}
          error={errors.error_solution}
        />

        <ButtonsContainer>
          <MainPageButton />
          <SubmitButton />
        </ButtonsContainer>
      </StyledForm>
    </Wrapper>
  )
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;

  padding: 30px;

  border: 2px solid #a598b9;
  border-radius: 30px;
`

export default memo(ErrorPage)
