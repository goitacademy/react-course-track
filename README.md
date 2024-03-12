# Заняття 13 - HTTP-запити з Redux Toolkit

- Асинхронні операції
  - Форма стану слайса: loading, error, data
  - Екшени слайса: pending, success, error
- Оголошення операції `fetchTasks`
  - URL запиту: `https://62584f320c918296a49543e7.mockapi.io/tasks`
  - Діспатч синхронних екшенів pending, success, error
  - Діспатч операції у компоненті при монтуванні
  - Огляд як працює диспатч функій (`redux-thunk`)
- Оголошення операції через `createAsyncThunk`
  - Операціі `fetchTasks`, `addTask` та `deleteTask`
  - Діспатч операції у компоненті
  - Обробка результату операції у слайсі (`extraReducers`)
  - Обробка запиту, що завершився з помилкою (`thunkAPI.rejectWithValue`)
