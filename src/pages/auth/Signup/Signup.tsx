import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import {TypeOf} from "zod";
import {Link, useNavigate} from "react-router-dom";
import Header from "../../../components/Header";
import {Container} from "../styles";
import {validation as createUserSchema} from './validation';

type CreateUserInput = TypeOf<typeof createUserSchema>;

function RegisterPage() {
    const [registerError, setRegisterError] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<CreateUserInput>({
        resolver: zodResolver(createUserSchema),
    });

    async function onSubmit(values: CreateUserInput) {
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users`,
                values
            );
            navigate('/');
        } catch (e: any) {
            setRegisterError(e.message);
        }
    }


    return (
        <>
            <Header/>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>
                        create new account
                    </h1>
                    <div>
                        <div className='cyberdiv'>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <div><input
                                        {...field}
                                        type="firstName"
                                        placeholder='EMAIL'
                                        {...register("email")}
                                    />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='cyberError'>
                            {errors.email?.message}
                        </div>
                        <div className='cyberdiv'>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <div><input
                                        {...field}
                                        type="name"
                                        placeholder='NAME'
                                        {...register("name")}
                                    />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='cyberError'>
                            {errors.name?.message}
                        </div>
                        <div className='cyberdiv'>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <div><input
                                        {...field}
                                        type="password"
                                        placeholder='PASSWORD'
                                        {...register("password")}
                                    />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='cyberError'>
                            {errors.password?.message}
                        </div>

                        <div className='cyberdiv'>
                            <Controller
                                name="passwordConfirmation"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="passwordConfirmation"
                                            placeholder='CONFIRM PASSWORD'
                                            {...register('passwordConfirmation')}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='cyberError'>
                            {errors.passwordConfirmation?.message}
                        </div>
                    </div>
                    <button
                        className='cyberbutton'
                        color="primary"
                        type="submit"
                        disabled={isLoading}
                    >
                        SING UP
                    </button>
                    <div>
                        <div>
                            <Link to='/login'>Already have an account?</Link>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    );
}

export default RegisterPage;
