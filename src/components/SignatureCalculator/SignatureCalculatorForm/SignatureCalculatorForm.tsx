import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

import FormButton from "../FormButton/FormButton";
import FormField from "../FormField/FormField";

import styles from "./SignatureCalculatorForm.module.css";

interface SignatureCalculatorFormProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  generateSignature: (
    apiSecret: string,
    apiKey: string,
    requestPath: string,
    params: { query: string | null; requestBody: string | null }
  ) => Promise<void>;
}

const initialState = {
  searchParams: "",
  apiKey: "",
  requestBody: "",
  apiSecret: "",
  path: "",
};

const SignatureCalculatorForm = ({
  isLoading,
  setIsLoading,
  generateSignature,
}: SignatureCalculatorFormProps) => {
  const [formState, setFormState] = useState({
    searchParams: "?mode=paper",
    requestBody: "",
    apiKey: "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A",
    apiSecret:
      "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j",
    path: "/public/api/ver1/users/change_mode",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id: key, value } = e.target;
    setFormState((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await generateSignature(
        formState.apiSecret,
        formState.apiKey,
        formState.path,
        {
          query:
            formState.searchParams.length > 0 ? formState.searchParams : null,
          requestBody:
            formState.requestBody.length > 0 ? formState.requestBody : null,
        }
      );

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
      <FormField
        onChange={handleChange}
        value={formState.apiKey}
        id="apiSecret"
        isRequired
        label="Secret Key"
        type="password"
        placeholder="Your API secret key"
      />
      <FormField
        onChange={handleChange}
        value={formState.apiSecret}
        id="apiKey"
        isRequired
        label="API Key"
        type="password"
        placeholder="Your API key"
      />
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
          isLoading ||
          (formState.searchParams.length > 0 &&
            formState.requestBody.length > 0) ||
          !allowGeneration
        }
      >
        Generate SHA signature
      </FormButton>
    </form>
  );
};

export default SignatureCalculatorForm;
