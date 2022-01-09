import styles from "./InputField.module.scss";


export const InputField = (props) => {

  const {
    label,
    placeholder,
    type,
    required,
    guidance,
    disabled = false,
    defaultValue,
    autoComplete,
    inputProps
  } = props;

  return (
    <div className={styles.inputFieldContainer}>
      <div className={styles.labelAndRequiredBadge}>
        {label && <label htmlFor={label} className={styles.label}>{label}</label>}
        {required && <span className={styles.requiredBadge}>必須</span>}
      </div>
      <input
        { ...inputProps }
        className={styles.inputField}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      {guidance && <p className={styles.guidance}>{guidance}</p>}
    </div>
  );
};
