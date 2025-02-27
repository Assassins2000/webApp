const express = require('express');
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = require('./config/database');
const User = require('./models/user');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
// Запуск задач
const CronService = require('./tasks/cronService');

const app = express();
app.use(express.json());

const umzug = new Umzug({
    migrations: {
        glob: 'migrations/*.js'
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

const cronService = new CronService();
cronService.init(); 

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync();

        await umzug.up();

        app.use('/api/users', userRoutes);
        app.use('/api/tasks', taskRoutes);

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();