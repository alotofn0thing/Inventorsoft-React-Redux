import { useSelector, useDispatch } from 'react-redux';
import {
	Container,
	Grid,
	Paper,
	List,
	Switch,
	Box,
	Alert,
} from '@mui/material/';
import { DarkMode, LightMode } from '@mui/icons-material';
import Item from './components/Item';
import TodoHeader from './components/TodoHeader';
import { toggleTheme } from './store/themeReducer';

const App = () => {
	const dispatch = useDispatch();

	const todo = useSelector(state => state.todo.list);
	const theme = useSelector(state => state.setup.theme);

	return (
		<div className={`main ${theme.isDark ? 'dark' : 'light'}`}>
			<Container fixed sx={{ paddingTop: '30px' }}>
				<Paper
					elevation={0}
					sx={{
						padding: '30px',
						backgroundColor: theme.colors.primary,
						color: theme.colors.text,
					}}
				>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							{theme.isDark ? (
								<DarkMode sx={{ color: '#f0f7ff' }} />
							) : (
								<LightMode sx={{ color: '#f5a11f' }} />
							)}
							<Switch
								checked={theme.isDark}
								onClick={() => dispatch(toggleTheme())}
							/>
						</Box>
					</Box>

					<TodoHeader />
					<List sx={{ paddingTop: '50px' }}>
						{todo.length > 0 ? (
							<Grid container spacing={5}>
								{todo.map((current, index) => {
									return (
										<Item
											text={current.title}
											id={current.id}
											secondary={current.description}
											key={index}
										/>
									);
								})}
							</Grid>
						) : (
							<Alert>No tasks available</Alert>
						)}
					</List>
				</Paper>
			</Container>
		</div>
	);
};

export default App;
