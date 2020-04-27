import React, { SFC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

// add problem action
import { addProblem } from '../../utils/Api'

// problem intefrace
import { IProblem } from '../../store/problemsModule'

// styled components
import Input from '../../components/Input'
import Wrapper from '../../layouts/Wrapper'
import StyledForm from '../../layouts/Form'
import TextArea from '../../components/TextArea'
import SubmitButton from '../../components/SubmitButton'
import MainPageButton from '../../components/MainPageButton'
import ButtonsContainer from '../../layouts/ButtonsContainer'

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
    <Wrapper>
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
    </Wrapper>
  )
}

export default compose(connect(null, { addProblem }))(memo(ProblemPage))
