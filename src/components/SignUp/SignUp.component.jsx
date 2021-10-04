import {useForm, Controller} from 'react-hook-form';
import Input from '@mui/material/Input'
//styling...
import './SignUp.style.css'

const SignUp = () => {
    const {register, handleSubmit, watch, formState:{errors}, control} = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("username"));

    return ( 
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                {errors.firstName && <span>Reuired field</span>}
                <input type="text" {...register("username", {required: true, maxLength: 4})} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: {error} }) => <Input {...field} />}
                    rules={{
                        required:true,
                    }}
                    
                />
                <input type="submit" value="submit" />
            </form>
        </div>
     );
}
 
export default SignUp;