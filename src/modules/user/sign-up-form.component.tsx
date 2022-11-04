import { Box, Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpUser } from "modules/user/user.service";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CreateUserResponse } from 'modules/user/user.models';
import { setConstantValue } from "typescript";

type CreateUserFormValues = {
	firstName: string,
	lastName: string,
	email: string,
	streetAddress: string,
	city: string,
	state: string,
	zipCode: string,
	password: string
}

export const SignUpForm = () => {
		const navigate = useNavigate();
		const [error, setError] = useState(false);
		const [errorMessage, setErrorMessage] = useState('');

		const { register, handleSubmit, watch, formState: { errors }, resetField } = useForm<CreateUserFormValues>({
				mode: 'onChange',   // Validation happens whenever a field is updated
				defaultValues: {
					firstName: '',
					lastName: '',
					email: '',
					streetAddress: '',
					city: '',
					state: '',
					zipCode: '',
					password: ''
				}
		});

		const onSubmit: SubmitHandler<CreateUserFormValues> = data => {
				const createUserRequest = {
						first_name: data.firstName,
						last_name: data.lastName,
						email: data.email,
						street_address: data.streetAddress,
						city: data.city,
						state: data.state,
						zip_code: data.zipCode,
						password: data.password,
				};

				signUpUser(createUserRequest)
					.then((res: any) => {
						console.log(res.token);
						localStorage.setItem('token', res.token);
						navigate('/ev-stations/index')
					})
					.catch((err: any) => {
						console.error('Error:', err);
						console.error('Error:', err.response.data.errors);
						setError(true);
						setErrorMessage(err.response.data.errors)
					});					
		};

		return (
			<Box onSubmit={handleSubmit(onSubmit)} component="form">
				<Grid container spacing={2}>
					<Grid container item xs={12} md={4} spacing={1.1} justifyContent="center">
						<Grid item xs={12} >
							<TextField
								error={!!errors.firstName}
								inputProps={{
										...register('firstName', {
												required: { value: true, message: 'First name is required' },
												maxLength: { value: 50, message: 'First name is too long' }
										})
								}}
								fullWidth
								type="text"
								label="First Name"
								helperText={!!errors.firstName && errors.firstName?.message}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								error={!!errors.lastName}
								inputProps={{
										...register('lastName', {
												required: { value: true, message: 'Last name is required' },
												maxLength: { value: 50, message: 'Last name is too long' }
										})
								}}
								fullWidth
								type="text"
								label="Last Name"
								helperText={!!errors.lastName && errors.lastName?.message}
							/>
						</Grid>
				
						<Grid item xs={12}>
							<TextField
								error={!!errors.email}
								inputProps={{
										...register('email', {
												required: { value: true, message: 'Email is required' },
												maxLength: { value: 50, message: 'Email is too long' } // ToDo: Add validation for email format
										})
								}}
								fullWidth
								type="text"
								label="Email"
								helperText={!!errors.email && errors.email?.message}
							/>
						</Grid>
						
						<Grid item xs={12}>
							<TextField
								error={!!errors.streetAddress}
								inputProps={{
										...register('streetAddress', {
												required: { value: true, message: 'Street Address is required' },
												maxLength: { value: 50, message: 'Street Address is too long' }
										})
								}}
								fullWidth
								type="text"
								label="Street Address"
								helperText={!!errors.streetAddress && errors.streetAddress?.message}
							/>
						</Grid>
					
						<Grid item xs={12}>
							<TextField
								error={!!errors.city}
								inputProps={{
										...register('city', {
												required: { value: true, message: 'City is required' },
												maxLength: { value: 50, message: 'City is too long' }
										})
								}}
								fullWidth
								type="text"
								label="City"
								helperText={!!errors.city && errors.city?.message}
							/>
						</Grid> 
											 
						<Grid item xs={12}>
							<TextField
								error={!!errors.state}
								inputProps={{
										...register('state', {
												required: { value: true, message: 'State is required' },
												maxLength: { value: 50, message: 'State is too long' }
										})
								}}
								fullWidth
								type="text"
								label="State"
								helperText={!!errors.state && errors.state?.message}
							/>
						</Grid>
						
						<Grid item xs={12}>
							<TextField
								error={!!errors.zipCode}
								inputProps={{
										...register('zipCode', {
												required: { value: true, message: 'Zip Code is required' },
												maxLength: { value: 50, message: 'Zip Code is too long' }
										})
								}}
								fullWidth
								type="text"
								label="Zip Code"
								helperText={!!errors.zipCode && errors.zipCode?.message}
							/>
						</Grid>  
					
						<Grid item xs={12}>
							<TextField
								error={!!errors.password}
								inputProps={{
										...register('password', {
												required: { value: true, message: 'Password is required' },
												maxLength: { value: 50, message: 'Password is too long' } // ToDo: Add validation for password confirmation
										})
								}}
								fullWidth
								type="password"
								label="Password"
								helperText={!!errors.password && errors.password?.message} // ToDo: add error handling for if the email is taken, reroute to index page
							/>
						</Grid>  
						
						<Grid item>
							<Button type="submit" variant="contained"> 
								Sign Up
							</Button>
							{error && (<h3 style={{color:'red', justifyContent:'left'}}>{errorMessage.toString()}</h3>) }
						</Grid>
					</Grid>
				</Grid>
			</Box>
		);
}

export default SignUpForm;