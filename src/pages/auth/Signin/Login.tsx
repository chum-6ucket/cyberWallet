import {useContext, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import {TypeOf} from "zod";
import {Link, useNavigate} from "react-router-dom";
import {GlobalStateContext} from "../../../contexts";
import Header from "../../../components/Header";
import {Container} from "../styles";
import {validation as createSessionSchema} from './validation';
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

type CreateSessionInput = TypeOf<typeof createSessionSchema>;

function LoginPage() {

    const {setSessionState} = useContext(GlobalStateContext);
    const [, setLoginError] = useState(null);
    const navigate = useNavigate();
    const [isLoading] = useState(false);


    const {
        control,
        formState: {errors},
        handleSubmit,
    } = useForm<CreateSessionInput>({
        resolver: zodResolver(createSessionSchema),
    });


    const {data} = useSWR(
        `http://localhost:1337/api/sessions`,
        fetcher,
    )

    async function onSubmit(values: CreateSessionInput) {

        try {
            await axios.post(
                `http://localhost:1337/api/sessions`,
                values,
                {withCredentials: true}
            );
            // @ts-ignore
            setSessionState(data)
            navigate('/')
        } catch (e: any) {
            setLoginError(e.message);
        }
    }

    return (
        <>
            <Header/>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>
                        log in
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
                                        type="email"
                                        placeholder='EMAIL'
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
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder='PASSWORD'
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='cyberError'>
                            {errors.password?.message}
                        </div>
                        <button
                            className='cyberbutton'
                            type="submit"
                            disabled={isLoading}
                        >
                            Login
                        </button>
                        <div>
                            <div>
                                <Link to='/registration'>Create an account</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    );
}

export default LoginPage;
