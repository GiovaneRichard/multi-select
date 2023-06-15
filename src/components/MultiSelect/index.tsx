import React from 'react'
import Select from 'react-select';


interface IEstados {
  nome: string;
  sigla: string;
}

interface IMultiSelectProps {
  options: IEstados[];
}

export const MultiSelect: React.FC<IMultiSelectProps> = ({ options }) => {

  return (
    <>
      <Select isMulti options={options} />
    </>
  )
}
