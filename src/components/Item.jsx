import { useState } from 'react';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Grid,
	IconButton,
	TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../store/actions/actions';

const Item = props => {
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);
	const [title, setTitle] = useState('');
	const [descr, setDescr] = useState('');

	const theme = useSelector(state => state.setup.theme);

	const handleDelete = id => {
		dispatch(deleteTodo(id));
	};

	const handleSave = list => {
		const updatedTodo = {
			title: title,
			description: descr,
			id: list.id,
		};
		dispatch(editTodo(updatedTodo));
		setEdit(false);
	};

	return (
		<Grid item xs={12} lg={4}>
			{edit ? (
				<>
					<TextField
						label='Edit title'
						value={title}
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
						onChange={event => setTitle(event.target.value)}
					/>
					<TextField
						label='Edit description'
						value={descr}
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
						onChange={event => setDescr(event.target.value)}
					/>

					<IconButton onClick={() => handleSave(props)} color='error'>
						<SaveIcon />
					</IconButton>

					<IconButton onClick={() => setEdit(false)} color='error'>
						<CancelIcon />
					</IconButton>
				</>
			) : (
				<ListItem
					sx={{
						borderRadius: '10px',
						backgroundColor: theme.colors.secondary,
						justifyContent: 'center',
					}}
				>
					<ListItemText
						primary={props.text}
						secondary={props.secondary}
						secondaryTypographyProps={{ color: theme.colors.special }}
					/>
					<ListItemIcon>
						<IconButton
							onClick={() => {
								setEdit(true);
								setTitle(props.text);
								setDescr(props.secondary);
							}}
							color='error'
						>
							<EditIcon />
						</IconButton>

						<IconButton onClick={() => handleDelete(props.id)} color='error'>
							<DeleteIcon />
						</IconButton>
					</ListItemIcon>
				</ListItem>
			)}
		</Grid>
	);
};

export default Item;
