import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchCreatePost } from '../../redux/posts-slice'
import { ImageUploader } from '../imageUploader/index'
import { Alert } from '../alert/index'

export function NewPostForm () {
  const dispatch = useDispatch()
  const { handleSubmit, register, reset, formState: { errors } } = useForm()
  const formRef = useRef(null)

  function onSubmit () {
    const formData = new FormData(formRef.current)

    dispatch(fetchCreatePost(formData))
    reset()
  }

  function renderAlert () {
    if (!Object.keys(errors).length) return

    return (
      <Alert type="danger">The Form has empty fields!</Alert>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      {renderAlert()}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`} id="title" {...register('title', { required: true })} />
      </div>
      <div className="mb-3">
        <label htmlFor="lessonNumber" className="form-label">Lesson number</label>
        <input type="number" className={`form-control ${errors.lesson_num ? 'is-invalid' : ''}`} id="lessonNumber" {...register('lesson_num', { required: true })} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className={`form-control ${errors.description ? 'is-invalid' : ''}`} id="description" rows="3" {...register('description', { required: true })}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Text</label>
        <textarea className={`form-control ${errors.text ? 'is-invalid' : ''}`} id="text" rows="6" {...register('text', { required: true })}></textarea>
      </div>
      <div className="mb-3">
        <ImageUploader label="Image" isValid={!errors.image} register={register} name="image" />
      </div>

      <div className="d-flex">
        <button type="submit" className="btn btn-primary ms-auto">Add post</button>
      </div>
    </form>
  )
}
