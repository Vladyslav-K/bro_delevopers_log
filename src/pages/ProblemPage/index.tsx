import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { addProblem } from '../../utils/Api'

import { IProblem } from '../../store/problemsModule'

// styled components
import Input from '../../components/Input'
import Wrapper from '../../layouts/Wrapper'
import TextArea from '../../components/TextArea'
import SubmitButton from '../../components/SubmitButton'
import MainPageButton from '../../components/MainPageButton'

interface IProblemPage {
  addProblem: (data: IProblem) => void
}

const ProblemPage: SFC<IProblemPage> = ({ addProblem }) => {
  const { register, handleSubmit, errors, reset } = useForm<IProblem>()

  const onSubmit = handleSubmit((props) => {
    const data: IProblem = { ...props, createdAt: new Date() }
    addProblem(data)
    reset()
  })

  return (
    <StyledWrapper>
      <StyledForm onSubmit={onSubmit}>
        <Input
          name="problem_heading"
          label="Brief description of the problem"
          placeholder="Best ReactJS form library"
          ref={register({ required: true })}
          error={errors.problem_heading}
        />

        <TextArea
          name="problem_description"
          label="Detailed description of the problem"
          placeholder="Need to select some of the best libraries for working with forms in ReactJS"
          ref={register({ required: true })}
          error={errors.problem_description}
        />

        <TextArea
          name="problem_solution"
          label="Problem solution"
          placeholder="formik, react-hook-form, redux-form"
          ref={register({ required: true })}
          error={errors.problem_solution}
        />

        <TextArea
          name="problem_code"
          label="Code with a problem and solution (optional)"
          placeholder="<span> Awesome code </span>"
          ref={register({ required: false })}
        />

        <ButtonsContainer>
          <MainPageButton />
          <SubmitButton />
        </ButtonsContainer>
      </StyledForm>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  padding: 30px 0;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

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

export default compose(connect(null, { addProblem }))(memo(ProblemPage))
