// Импортируем необходимые модули
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Создаем экземпляр Express-приложения
const app = express();
const PORT = 3001; // Порт, на котором будет работать сервер

// Используем CORS для разрешения запросов с другого домена
app.use(cors());

// Создаем маршрут для получения данных о ценах криптовалют
app.get('/api/prices', async (req, res) => {
  try {
    // Делаем запрос к API CoinGecko для получения данных о ценах Bitcoin и Ethereum
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    // Отправляем полученные данные в ответе
    res.json(response.data);
  } catch (error) {
    // Обрабатываем ошибки и отправляем ответ с кодом 500
    res.status(500).send('Error fetching data');
  }
});

// Запускаем сервер на указанном порту
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});