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
  link_heading: string
  link_path: string
}

const LinkPage: SFC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = handleSubmit(props => {
    console.log(props)
  })

  return (
    <Wrapper>
      <StyledForm onSubmit={onSubmit}>
        <Input
          name="link_path"
          label="Link"
          placeholder="Enter here link"
          ref={register({ required: true })}
          error={errors.link_path}
        />

        <TextArea
          name="link_heading"
          label="Description of the link"
          placeholder="Enter here a description of the link"
          ref={register({ required: true })}
          error={errors.link_heading}
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

export default memo(LinkPage)
