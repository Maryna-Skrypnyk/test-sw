import { useState } from 'react';
// import {
//   BsCurrencyDollar,
//   BsCurrencyEuro,
//   BsCurrencyYen,
// } from 'react-icons/bs';
import Select from 'react-select';
import { ReactSVG } from 'react-svg';

import ChevronDownIcon from '../../../../assets/icons/chevron-down.svg';
import ChevronUpIcon from '../../../../assets/icons/chevron-up.svg';

import styles from './CurrencyMenu.module.scss';
import customStyles from './CustomStyles/customStyles';

const options = [
  { value: 'USD', label: '$ USD' },
  { value: 'EUR', label: '€ EUR' },
  { value: 'JPY', label: '¥ JPY' },
];

const initialState = {
  value: options[0].value,
  label: options[0].label.slice(0, 1),
};

const CurrencyMenu = () => {
  const [selectedOption, setSelectedOption] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  const handleLabel = selectedOption => {
    return isOpen ? selectedOption.label : selectedOption.label.slice(0, 1);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.currency}>
      <Select
        defaultValue={selectedOption}
        //   defaultMenuIsOpen
        onChange={setSelectedOption}
        options={options}
        name="currency"
        placeholder=""
        styles={customStyles}
        formatOptionLabel={handleLabel}
        // getOptionLabel={handleLabel}
        onMenuOpen={openMenu}
        onMenuClose={closeMenu}
      />
      {!isOpen ? (
        <ReactSVG src={ChevronDownIcon} className={styles.iconChevron} />
      ) : (
        <ReactSVG src={ChevronUpIcon} className={styles.iconChevron} />
      )}
    </div>
  );
};

export default CurrencyMenu;
