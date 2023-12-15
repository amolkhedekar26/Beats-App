import { Input } from '../../components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  emailValidation,
  passwordValidation,
} from '../../utils/inputValidations'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action.jsx'
import { getState } from '../../redux/reducers/auth.reducer.js'

export const LoginPage = props => {
  const methods = useForm()
  const navigate = useNavigate()
  const state = useSelector(getState)
  const loggedIn = state.authReducer.isLoggedIn

  useEffect(() => {
    if (loggedIn) {
      // navigate('/home/*')
      navigate(-1)
    }
  }, [loggedIn])

  useEffect(() => {
    let defaultValues = {}
    defaultValues.email = 'zcoder@gmail.com'
    defaultValues.password = 'zcoder123'
    methods.reset({ ...defaultValues })

  }, [])


  const dispatch = useDispatch()
  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    dispatch(login(data.email, data.password))
    methods.reset()
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete='off'
        className='form-container'
      >
        <h1
          className='mb-4 text-4xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white'>
          <span className='text-blue-600 dark:text-blue-500 font-extrabold '>
            Sign In
          </span>
          <span className='ml-4 text-3xl'>
            here
          </span>
        </h1>
        <h4 className='mb-4 text-3xl  leading-none tracking-tight text-gray-500 md:text-2xl lg:text-xl dark:text-white'>
          Let's get in
        </h4>
        <div className='flex flex-col mt-8'>
          <Input {...emailValidation} />
          <Input {...passwordValidation} />
        </div>
        <div className='mt-5 flex justify-between items-center'>
          <p>
            Don't have an account?
            <Link to='/signup' className='text-blue-600 ml-2 rainbow'>
              Sign Up
            </Link>
          </p>

          <button
            onClick={onSubmit}
            className='p-3 ml-4 px-12 rounded-full bg-blue-600 font-semibold text-white flex  gap-1 hover:bg-blue-800'
          >
            Login
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
