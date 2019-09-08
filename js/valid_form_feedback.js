function valid(form){
    let name = form.name.value;
    let number = form.number.value;
    let msg = form.msg.value;
    var len = /^[А-Яа-яЁё]+$/;
    var len_number = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    var fail = false;

    if(name.trim() == ""){
        fail = "Введите имя!";
    } else if(!len.test(name) || name.trim().length < 4){
        fail = "Имя должно быть на русском и иметь не менее 4 букв и не более 10!";
    } else if(number.trim() == ""){
        fail = "Введите моильный номер";
    } else if(!len_number.test(number)){ 
        fail = "Номер должен состоять от 7 до 10 цифр!";
    } else if(msg.trim().length < 4){
        fail = "Сообщение должно иметь не менее 4 букв!";
    }

    if(fail)
        alert(fail);
    else 
        alert("Ваша заявка принята!");
    }