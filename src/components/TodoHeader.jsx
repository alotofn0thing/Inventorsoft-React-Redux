import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Box, TextField, Button, Grid, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/actions';
import { useSelector } from 'react-redux';

const TodoHeader = () => {
	const dispatch = useDispatch();

	const theme = useSelector(state => state.setup.theme);

	const [todoTitle, setTitle] = useState('');
	const [todoDescription, setDescription] = useState('');
	const [error, setError] = useState(false);
	const handleAdd = e => {
		e.preventDefault();

		if (todoTitle.length >= 4 && todoDescription.length >= 6) {
			const newTodo = {
				title: todoTitle,
				description: todoDescription,
				id: Date.now().toString(),
			};

			setTitle('');
			setDescription('');
			dispatch(addTodo(newTodo));
			setError(false);
		} else {
			setError(true);
		}
	};

	return (
		<>
			<Box sx={{ textAlign: 'center' }}>
				<h1 sx={{}}>Organize your day</h1>
			</Box>

			<form>
				<TextField
					label='New task title'
					size='large'
					value={todoTitle}
					sx={{
						width: 1,
						paddingBottom: '15px',
						color: theme.colors.text,
						input: {
							color: theme.colors.text,
							border: '0px',
						},
					}}
					InputLabelProps={{
						style: { color: theme.colors.text },
					}}
					onChange={e => setTitle(e.target.value)}
				/>

				<TextField
					label='New task description'
					size='large'
					value={todoDescription}
					sx={{
						width: 1,
						paddingBottom: '15px',
						color: theme.colors.text,
						input: {
							color: theme.colors.text,
							border: '0px',
						},
					}}
					InputLabelProps={{
						style: { color: theme.colors.text },
					}}
					onChange={e => setDescription(e.target.value)}
				/>

				{error ? (
					<Alert severity='error' onClose={() => setError(false)}>
						Task name must be longer than 3 characters and task description must
						longer than 5 characters
					</Alert>
				) : null}

				<Grid container sx={{ justifyContent: 'flex-end', paddingY: '10px' }}>
					<Grid item>
						<Button onClick={e => handleAdd(e)} variant={'contained'}>
							<SendIcon sx={{ color: theme.colors.text, paddingX: '10px' }} />
						</Button>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default TodoHeader;
