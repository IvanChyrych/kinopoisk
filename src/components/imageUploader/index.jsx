import { useState } from 'react'

export function ImageUploader ({ label, isValid, register, name }) {
  const [imageUrl, setImageUrl] = useState('')

  function handleChangeImage (event) {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)

    setImageUrl(url)
  }

  return (
    <>
      <label htmlFor="image" className="form-label">{label}</label>
      <input className={`form-control ${!isValid ? 'is-invalid' : ''}`} type="file" id="image" accept=".jpg,.jpeg,.png" {...register(name, { required: true })} onChange={handleChangeImage} />

      {imageUrl && <img src={imageUrl} className="img-fluid rounded-3 d-block mt-3" />}
    </>
  )
}
