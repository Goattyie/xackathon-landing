import React, {useState} from 'react';
import { ProblemCategory } from '../types/ProblemCategory';
import ComboBox from './UI/ComboBox';
import FileButton from './UI/FileButton';
import SubmitButton from './UI/SubmitButton';
import TextBox from './UI/TextBox';
import '../css/Form.css'

export default function RequestForm() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('+38071');
  const [description, setDescription] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const categoryList: ProblemCategory[] = loadCategories();


  function onChangeName (e: React.FormEvent<HTMLInputElement>) : void { setName(e.currentTarget.value); }
  function onKeyPressPhone (e: React.KeyboardEvent<HTMLInputElement>): void { 
    if(e.currentTarget.value.length === 6 && e.key === 'Backspace'){
      e.preventDefault();
      return;
    }

    if(e.key === 'Backspace'){
      setPhone(phone.substring(0, phone.length - 1));
      return;
    }

    if(e.key.search('[0-9]') !== 0){
      e.preventDefault();
      return;
    }

    if(e.currentTarget.value.length >= 13){
      e.preventDefault();
      return;
    }

    setPhone(phone + e.key);
  }
  function onChangeDescription (e: React.FormEvent<HTMLInputElement>) : void { setDescription(e.currentTarget.value); }
  function onChangeAddress (e: React.FormEvent<HTMLInputElement>) : void { setAddress(e.currentTarget.value); }
  function onChangeEmail (e: React.FormEvent<HTMLInputElement>) : void { setEmail(e.currentTarget.value); }
  function onChangeCategory(e: React.ChangeEvent<HTMLSelectElement>) : void { console.log(e.currentTarget.value); setCategoryId(Number(e.currentTarget.value)); }
  function createRequest(e: React.FormEvent){
    e.preventDefault();
    if(isValid()){
      let xhr = new XMLHttpRequest();
      const data = {'fio': name, 'phone': phone, 'source': 'telegram', 'content': [], 'problemCategories': [categoryId], 'location': address, 'latitude': 0, 'longitude': 0, 'description': description, 'email': email}
      const json = JSON.stringify(data);
      console.log(json);
      /* xhr.open('post', 'http://localhost:5000/requests', false);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(json);
      if(xhr.status == 200){
        alert("Запись добавлена");
        setAddress('');
        setName('');
        setPhone('+38071');
        setDescription('');
        setEmail('');
        setShowError(false);
      }*/
    }
  }
  function isValid() : boolean{
    if(name.length === 0){
      setError('ФИО не указана');
      setShowError(true);
      return showError;
    }
    if(phone.length !== 13){
      setError('Телефон указан неверно');
      setShowError(true);
      return showError;
    }
    if(categoryId == 0){
      setError('Категория не выбрана');
      setShowError(true);
      return showError;
    }
    if(description.length == 0){
      setError('Описание указано неверно');
      setShowError(true);
      return showError;
    }
    if(address.length == 0){
      setError('Адрес указан неверно');
      setShowError(true);
      return showError;
    }
    
    setShowError(false);
    return showError;
  }
  function loadCategories() : ProblemCategory[]{
    let list : ProblemCategory[] = [];
    let xhr = new XMLHttpRequest();

    /* xhr.open('get', 'http://localhost:5000/problem-categories', false);

    xhr.send();
    if(xhr.status == 200){
      list = (JSON.parse(xhr.response)).data as ProblemCategory[];
    }*/
  
    return list;
  }

  return (
  <div className='center'>
    <form onSubmit={createRequest}>
      <br/><br/><br/><br/>
      <TextBox labelName='ФИО:' inputPlaceholder='Введие ваше настоящее ФИО' description='Фамилия имя отчество' onChange={onChangeName}/><br/>
      <TextBox labelName='Телефон:' inputPlaceholder='+380XXXXXXXX' description='Номер телефона оператора Phoenix' onKeyDown={onKeyPressPhone} value={phone}/><br/>
      <ComboBox list={categoryList} description='Выберите категорию проблемы' onChange={onChangeCategory}/><br/>
      <h6 style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>Выберите картинки</h6>
      <FileButton description='Выберите картинки'/>
      <TextBox labelName='Описание:' inputPlaceholder='Введите текст' description='Описание запроса' onChange={onChangeDescription}/><br/>
      <TextBox labelName='Адрес:' inputPlaceholder='Введите адрес проблемной ситуации' description='Местоположение проблемы' onChange={onChangeAddress}/><br/>
      <TextBox labelName='Электронная почта' inputPlaceholder='mail@example.com' description='Почта для обратной связи' onChange={onChangeEmail}/><br/>
      <label className={showError == false ? 'hidden' : 'alert-danger' }>{error}</label>
      <SubmitButton description='Отправить заявку'/><br/>
      </form>
  </div>);
}
