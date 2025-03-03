import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

import { FormButton } from "../FormButton/FormButton";
import { FormField } from "../FormField/FormField";

import { GenerateSignatureArgs } from "../SignatureCalculator";

import styles from "./SignatureCalculatorForm.module.css";

interface Props {
  loading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  generateSignature: (args: GenerateSignatureArgs) => Promise<void>;
}

const initialState = {
  searchParams: "",
  apiKey: "",
  requestBody: "",
  apiSecret: "",
  path: "",
};

export const SignatureCalculatorForm = ({
  loading,
  setIsLoading,
  generateSignature,
}: Props) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id: key, value } = e.target;
    setFormState((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await generateSignature({
        apiSecret: formState.apiSecret,
        apiKey: formState.apiKey,
        requestPath: formState.path,
        params: {
          query:
            formState.searchParams.length > 0 ? formState.searchParams : null,
          requestBody:
            formState.requestBody.length > 0 ? formState.requestBody : null,
        },
      });

      setFormState(initialState);
    } finally {
      setIsLoading(false);
    }
  };

  const allowGeneration =
    formState.apiSecret.length &&
    formState.path.length &&
    (formState.searchParams.length || formState.requestBody.length);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["form-row"]}>
        <FormField
          onChange={handleChange}
          value={formState.apiSecret}
          id="apiSecret"
          isRequired
          label="Secret Key"
          type="password"
          placeholder="Your API secret key"
        />
        <FormField
          onChange={handleChange}
          value={formState.apiKey}
          id="apiKey"
          isRequired
          label="API Key"
          type="password"
          placeholder="Your API key"
        />
      </div>

      <div className={styles["form-row"]}>
        <FormField
          onChange={handleChange}
          value={formState.path}
          id="path"
          isRequired
          label="Path"
          placeholder="/public/api/ver1/users/change_mode"
        />
        <FormField
          onChange={handleChange}
          value={formState.searchParams}
          disabled={formState.requestBody.length > 0}
          id="searchParams"
          isRequired={false}
          label="Search Params"
          placeholder="?mode=paper"
        />
      </div>
      <FormField
        onChange={handleChange}
        value={formState.requestBody}
        disabled={formState.searchParams.length > 0}
        id="requestBody"
        isRequired={false}
        label="Request Body"
        placeholder={`user_id=12345
address=123 Main Street, Cityville
mode=paper
preferences={"theme":"dark","language":"en"}
email=johndoe@example.com
hobbies=reading, gaming, coding
            `}
        isTextarea={true}
      />
      <FormButton
        disabled={
          !allowGeneration ||
          (formState.searchParams.length > 0 &&
            formState.requestBody.length > 0) ||
          loading
        }
      >
        Generate SHA signature
      </FormButton>
    </form>
  );
};
