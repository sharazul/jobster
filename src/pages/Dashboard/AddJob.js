import { FormRow, FormRowSelect } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { handleChange, clearItems, addJob } from '../../features/jobs/jobSlice'
import { useEffect } from 'react'
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)

  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user)

  //.......................................
  // Add User Location To Job Location Field
  useEffect(() => {
    // eventually will check for isEditing
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])

  //............................................

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addJob({ position, company, jobLocation, status, jobType }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }
  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'Add job'}</h3>
        <div className='form-center'>
          {/*Position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />

          {/*Company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />

          {/*Job Location */}
          <FormRow
            type='text'
            name='jobLocation'
            labelText='Job Location'
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/*Status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/*Job Type*/}
          <FormRowSelect
            name='jobType'
            value={jobType}
            labelText='Job Type'
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearItems())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
