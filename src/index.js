console.log('Hello');

Gedel.dialog({
    addClass: 'myDialogClass', // кастомный класс, будет добавлен к имеющимся у окна
    title: 'Предупреждение',  // заголовок окна [необязательно]
    text: 'Вы уверены?', // текст [необязательно]
    buttons: [
        {
            text: 'Уверен',       //
            callback: ()=> { console.log('Уверен')}, // функция j
        },
        {
            text: 'Отменить',       //
            callback: ()=> { console.log('Не уверен')}, // функция
        }
    ]
});
