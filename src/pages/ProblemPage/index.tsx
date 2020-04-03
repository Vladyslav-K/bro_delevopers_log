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
  problem_heading: string
  problem_description: string
  problem_solution: string
}

const ProblemPage: SFC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = handleSubmit(props => {
    console.log(props)
  })

  return (
    <Wrapper>
      <StyledForm onSubmit={onSubmit}>
        <Input
          name="problem_heading"
          label="Brief description of the problem"
          placeholder="Enter here a brief description of the problem"
          ref={register({ required: true })}
          error={errors.problem_heading}
        />

        <TextArea
          name="problem_description"
          label="Detailed description of the problem"
          placeholder="Enter here a detailed description of the problem"
          ref={register({ required: true })}
          error={errors.problem_description}
        />

        <TextArea
          name="problem_solution"
          label="Problem solution"
          placeholder="Enter the solution here"
          ref={register({ required: true })}
          error={errors.problem_solution}
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

export default memo(ProblemPage)
