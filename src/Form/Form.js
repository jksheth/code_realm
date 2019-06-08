import React from 'react';
import Input from './Input';

const Form = (props) => {
  const data = props ? props : {};
  return (
    <form>
      <div className='form-left'>
        <Input
          name='id'
          label='Id'
        />
        <Input label='First Name' />
        <Input label='Last Name' />
        <Input label='Email Add' />
        <Input label='Phone' />
      </div>
      <div className='form-right'>
        <Input label='Age' />
        <Input inputType='select' options={['Actively Applying','Not open to offers']}/>
        <Input label='Address' />
        <Input inputType='radio' />
      </div>
    </form>
  );
}

export default Form;