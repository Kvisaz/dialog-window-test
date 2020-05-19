import * as constants from 'gedel-dialog'

declare var GedelDialog: any;

// импорт работает через неиспользуемую константу - потому что у нас самописный модуль, не отвечающий стандартам

console.log('Hello');
console.log('constants ', constants);
console.log('GedelDialog ', GedelDialog);

GedelDialog.make({
    id: 'first-dialog',
    title: 'Предупреждение',  // заголовок окна [необязательно]
    text: 'Вы уверены?', // текст [необязательно]
    buttons: [
        {
            label: 'Уверен',       //
            action: () => {
                GedelDialog.destroy();
                console.log('Уверен')
            }, // функция j
        },
        {
            label: 'Второе окно',       //
            action: () => {
                dialog2();
                console.log('Не уверен')
            }, // функция
        }
    ]
});


function dialog2() {
    GedelDialog.make({
        id: 'second-dialog',
        title: 'Второй диалог',  // заголовок окна [необязательно]
        text: 'Вы зашли далеко', // текст [необязательно]
        buttons: [
            {
                label: 'Да пофиг!',       //
                action: () => {
                    GedelDialog.destroy();
                    console.log('dialog2 click1')
                }, // функция j
            },
            {
                label: 'Понял, не буду больше',       //
                action: () => {
                    GedelDialog.destroy();
                    console.log('dialog2 click2')
                }, // функция
            }
        ]
    });
}
