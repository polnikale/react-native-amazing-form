type FieldType = "TexInput";

interface Field<T> {
  initialValue?: T;
  value?: T;
  onChange?: (value: T) => void;
  validateField?: (value: T) => boolean;
  type?: FieldType;
}
