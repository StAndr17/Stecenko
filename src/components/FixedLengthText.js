const FixedLengthText = ({text, length}) => (text && text.length > length ? text.substring(0, length) + "...": text);

export default FixedLengthText;
