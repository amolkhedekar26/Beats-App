import cn from 'classnames'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
}) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'p-3 font-medium rounded-full w-fit border border-2 border-slate-300 focus:outline-none focus:border-slate-500 placeholder:opacity-60'

  return (
    <div className={cn('flex flex-col w-fit gap-2 mb-2', className)}>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize text-gray-800">
          {label}
        </label>
        <AnimatePresence mode="wa addressit" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={cn(input_tailwind, 'min-h-[10rem] max-h-[20rem] resize-y')}
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
      ) : // <input
      //   id={id}
      //   type={type}
      //   className={cn(input_tailwind)}
      //   placeholder={placeholder}
      //   {...register(name, validation)}
      // />
      id == 'confirmPassword' ? (
        <input
          id={id}
          type={type}
          className={cn(input_tailwind)}
          placeholder={placeholder}
          {...register(name, {
            required: true,
            validate: value =>
              value === watch('password') || 'Passwords do not match',
          })}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={cn(input_tailwind)}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-sm text-red-500 bg-red-100 rounded-full"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
