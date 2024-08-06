import React from 'react'
import Form from '../components/Form'
import { useAddProfileMutation, useAddVignetteMutation } from '../redux/vignette'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
const AddVignette = () => {
    const [add] = useAddVignetteMutation()
    const [addProfile] = useAddProfileMutation()
    const location = useLocation()
    const id = location?.state?.userId
    const handleSubmit = () => {

    }
  return (
    <div>
         <Form add={add} id={id} addProfile={addProfile} />
    </div>
  )
}

export default AddVignette