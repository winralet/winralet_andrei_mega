const button = document.querySelector('.btn');
let clickCount = 0;

button.addEventListener('click', function () {

    // Увеличиваем счетчик нажатий
    clickCount++;

    // Проверяем, насколько раз нажали кнопку
    if (clickCount === 2) {
        alert('1 раза было достаточна');
        return; // Прекращаем выполнение кода
    }else if(clickCount === 3){
        alert('эй не надо нажимать ты прошел тест');
        return;
    }else if(clickCount === 4){
        alert('ЕЩЕ РАЗ НАЖМЕШЬ Я ДАННЫЕ ОТПРАВЛЮ ТВОЕЙ МАМЕ И СКАЖУ ЧТО ТЫ ПЛОХО СЕБЯ ВЕДЕШЬ!!!');
        return;
    }else if(clickCount === 5){
          // Запускаем звуковой файл при 5 нажатии
          const audio = new Audio('aaggkh-krik-starplatinum.mp3'); // Укажите путь к звуковому файлу
          audio.play(); // Играть звук
          alert("ты напросился")
          setTimeout(() => {
            window.close(); // Закрываем окно через 5 секунд
        }, 3000);
        return;
    }else if(clickCount === 5  || clickCount === 6){
        alert("ТЕБЕ НЕ СБЕЖАТЬ")
        return;
    }


    // имя
    let namename = prompt('Привет, как тебя зовут?');// спрашиваем 
    if (namename === null || namename.trim() === "") {// если имя равно null то 
        
        alert("если хочешь продолжать общение то говори имя а пока досвидания");//пишет:
        window.close();// закрываем
        return;// добавлено для предотвращения дальнейшего выполнения кода
    }
     console.log(namename)
    if (namename) { // думаю здесь понятно
        document.getElementById('name_name-output').textContent = `ваше имя: ${namename}`;// Отображаем слово 
    }else{
        document.getElementById('name_name-output').textContent = `ваше имя: не написал`;// Отображаем если имя не написано
    }
    // конец имени 

    // чем занимаемся
    alert("Привет, " + namename);// пишем привет и имя которое мы вводили
    let classes = prompt(namename + ' а какие твои увлечения?');// спрашиваем увлечения
    if (classes ===  null || classes.trim() === "") { // если увл. равно null или то 
        alert("если хочешь продолжать общение то говори свои увлечения а пока досвидания");//пишет
        window.close();// закрываем
        return;// добавлено для предотвращения дальнейшего выполнения кода
    }
    alert(namename + " это действительно интересное занятие"); // если написали то

    if (classes) { // думаю здесь понятно
        document.getElementById('classes-output').textContent = `ваше увлечение: ${classes}`;// Отображаем слово 
    }else{
        document.getElementById('classes-output').textContent = `ваше увлечение: не написал`;//  Отображаем если увл. не написано
    }

    // начала кражи кар... ой ну типо эмммм.. ДА КРАЖА КАРТЫ 

    alert('ну ладно ' + namename + ' а какой номер твоей карты?');// пишем что нужно номер карточки
    let kred = prompt('пиши)');// пишем

    if (kred === null || kred.trim() === "нет") { // проверяем, если kred равно null или "нет"
        alert("ну пж мне на автобус не хватает"); // выводим сообщение
        let kred_yes = prompt("да/нет"); // спрашиваем у пользователя
        if (kred_yes === 'да') { // если ответ 'да'
            alert("спс"); // благодарим
            kred = prompt('пиши)(еще раз сказать нет нельзя!!!)'); // и снова запрашиваем номер
        } else if (kred_yes === 'нет') { // если ответ 'нет'
            alert("да иди ты"); // выводим сообщение
            window.close(); // закрываем окно
            return; // завершаем выполнение
        } else { // если ответ не распознан
            alert("да иди ты"); // выводим сообщение
            window.close(); // закрываем окно
            return; // завершаем выполнение
        }
    }

     if (kred) { // думаю здесь понятно
        document.getElementById('kred-output').textContent = `ваш номер карты: ${kred}`;// Отображаем слово 
    }else{
        document.getElementById('kred-output').textContent = `ваш номер карты: нету `;// Отображаем слово 
    }
    // конец кражи КАРТЫ

    // если он все-таки ввел номер карты говорим что ты ну типо ДОВЕРЧИВЫЙ
   

    alert("капец ты крыжовник зачем ты ввел?");
  let gullible = prompt('Это социальный эксперимент так что я не куда не буду отправлять твои данные ОК? ок/эм нет');
if (gullible === 'ок' || gullible === 'ok' || gullible === 'ОК' || gullible === 'OK') { 
    alert("хорошо, пока");
} else if (gullible === "эм нет" || gullible === "ЭМ НЕТ" || gullible === "эм нет ") {
    alert('КАКОЙ НЕТ Я СЕЙЧАС ДАНЫЕ КИНУ В ПЕНТАГОН ну или твоим друзьям... КОРОЧЕ ЖДИ');
    window.close();
    return; 
} else { 
    alert('Неизвестный ответ');
}

    
        
    
    // конец ДОВЕРЧИВЫЙ

    // конец КОНЦОВ
});
