import React, { SFC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

// add link action
import { addLink } from '../../utils/Api'

// link intefrace
import { ILink } from '../../store/linksModule'

// styled components
import Input from '../../components/Input'
import Wrapper from '../../layouts/Wrapper'
import StyledForm from '../../layouts/Form'
import TextArea from '../../components/TextArea'
import SubmitButton from '../../components/SubmitButton'
import MainPageButton from '../../components/MainPageButton'
import ButtonsContainer from '../../layouts/ButtonsContainer'

interface ILinkPage {
  addLink: (data: ILink) => void
}

const LinkPage: SFC<ILinkPage> = ({ addLink }) => {
  const { register, handleSubmit, errors, reset } = useForm<ILink>()
  const onSubmit = handleSubmit((props) => {
    const data: ILink = { ...props, createdAt: new Date() }
    addLink(data)
    reset()
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
          name="link_description"
          label="Description of the link"
          placeholder="Enter here a description of the link"
          ref={register({ required: true })}
          error={errors.link_description}
        />

        <ButtonsContainer>
          <MainPageButton />
          <SubmitButton />
        </ButtonsContainer>
      </StyledForm>
    </Wrapper>
  )
}

export default compose(connect(null, { addLink }))(memo(LinkPage))
