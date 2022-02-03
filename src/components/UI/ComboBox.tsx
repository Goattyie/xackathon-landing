import React, { ChangeEvent } from 'react';
import { ProblemCategory } from '../../types/ProblemCategory';

interface ProblemCategories{
    list: ProblemCategory[];
    description: string;
    onChange(e: ChangeEvent<HTMLSelectElement>) : void;
}

export default function ComboBox({list, description, onChange}: ProblemCategories) {
  return (
  <div className="form-group" style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
      <label>Проблемная категория
        <select id="inputState" className="form-control" onChange={onChange}>
            <option defaultValue="0" selected>Выберите категорию</option>
        {list.map(item =>
                <option key={item.id} value={item.id}>{item.title}</option>
            )}
        </select>
        <small className="form-text text-muted">{description}</small>
      </label>
  </div>);
}
