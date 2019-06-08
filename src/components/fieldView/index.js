import React from 'react';
import ClassName from 'classnames';

const FieldView = ({
    input,
    label,
    placeholder,
    defaultValue,
    type,
    disable,
    meta: {touched, error}
}) => {
    const InputClass = ClassName('form-control', {
        error: touched && error
    });
    return (
        <div className="form-group col-6">
            <label>{label}</label>
            <input
                {...input}
                placeholder={placeholder}
                type={type}
                className={InputClass}
                disabled={disable}
            />
            {
                touched &&
                ((error && <span className="error">{error}</span>))
            }
        </div>
    );
}

export default FieldView;