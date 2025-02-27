module.exports = [
    { 
        name: 'task1',
        interval: '* * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task1 completed');
        }
    },
    { 
        name: 'task2',
        interval: '* * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task2 completed');
        }
    },
    { 
        name: 'task3',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task3 completed');
        }
    },
    { 
        name: 'task4',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task4 completed');
        }
    },
    { 
        name: 'task5',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task5 completed');
        }
    },
    { 
        name: 'task6',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task6 completed');
        }
    },
    { 
        name: 'task7',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task7 completed');
        }
    },
    { 
        name: 'task8',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task8 completed');
        }
    },
    { 
        name: 'task9',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task9 completed');
        }
    },  
    { 
        name: 'task10',
        interval: '*/5 * * * *',
        handler: async () => {
            await new Promise(resolve => setTimeout(resolve, 120000));
            console.log('Task10 completed');
        }
    }
];
