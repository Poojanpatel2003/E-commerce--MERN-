import React from 'react';
import { Form } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Make sure you import Button if it's custom
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'; // Include this if you're using custom select

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

  const renderInputsByComponentsType = ({ controlItem }) => {
    let element = null;
    const value = formData[controlItem.name] || '';

    switch (controlItem.componentType) {
      case 'input':
        element = (
          <input
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            type={controlItem.type}
            value={value}
            onChange={event =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      case 'select':
        element = (
          <Select
            onValueChange={value =>
              setFormData({
                ...formData,
                [controlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlItem.options && controlItem.options.length > 0
                ? controlItem.options.map(optionItem => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case 'textarea':
        element = (
          <textarea
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            value={value}
            onChange={event =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          ></textarea>
        );
        break;

      default:
        element = (
          <input
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            type={controlItem.type}
            value={value}
            onChange={event =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map(controlItem => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <label className="mb-1">{controlItem.label}</label>
            {renderInputsByComponentsType({ controlItem })}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || 'Submit'}
      </Button>
    </Form>
  );
};

export default CommonForm;
