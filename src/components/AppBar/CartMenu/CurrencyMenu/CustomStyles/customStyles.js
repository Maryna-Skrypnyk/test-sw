const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#5ece7b' : '#1d1f22',
    backgroundColor: state.isFocused ? '#FFFFFF' : 'inherit',
    marginBottom: 20,
    padding: 0,
    border: 'none',
    cursor: 'pointer',
  }),
  control: () => ({
    width: '100%',
    height: 29,
    // textOverflow: 'clip',
    // overflow: 'hidden',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: 0,
    height: 29,
  }),

  singleValue: provided => ({
    ...provided,
    margin: 0,
    width: '32px',
    fontFamily: 'Raleway, sans-serif',
    color: '#1d1f22',
    fontSize: '18px',
    lineHeight: 1.6,
  }),

  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    width: '32px',
    height: '29px',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 500,
    fontSize: '18px',
    borderBottom: 'none',
    cursor: 'pointer',
  }),

  indicatorsContainer: () => ({
    display: 'none',
  }),

  menu: provided => ({
    ...provided,
    backgroundColor: 'inherit',
    boxShadow: 'none',
    width: 114,
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 500,
    fontSize: 18,
    position: 'relative',
    left: '-20px',
    top: 0,

    '@media screen and (max-width: 480px)': {
      width: '90px',
      position: 'relative',
      left: '-14px',
      top: 0,
    },
  }),

  placeholder: provided => ({
    ...provided,
    margin: 0,
    fontFamily: 'Raleway, sans-serif',
    color: '#1d1f22',
    fontSize: 18,
    lineHeight: 1.6,
    fontWeight: 500,
  }),

  menuList: provided => ({
    ...provided,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontSize: 18,
    lineHeight: 1.6,
    fontWeight: 500,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 0,
    paddingRight: 35,

    '@media screen and (max-width: 480px)': {
      paddingLeft: 10,
      paddingTop: 15,
      paddingBottom: 0,
      paddingRight: 20,
    },
  }),

  container: provided => ({
    ...provided,
    cursor: 'pointer',
    width: 32,
    height: 29,
  }),
};

export default customStyles;
