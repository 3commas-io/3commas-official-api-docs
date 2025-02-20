import { useEffect } from "react";

import FormButton from "./FormButton/FormButton";
import FormField from "./FormField/FormField";
import { Informer } from "@site/src/components/Informer/Informer";

import styles from "./SignatureCalculatorForm.module.css";
import { Tooltip } from "../Tooltip";

const SignatureCalculatorForm = () => {

  return (
    <div>
      <Informer variant="info">
        <Tooltip content="Copy">
          <span>Your signature will be pasted here</span>
        </Tooltip>
      </Informer>
      <form className={styles.form}>
        <FormField
          id="apiSecret"
          isRequired
          label="Secret Key"
          type="password"
          placeholder="Your API secret key"
        />
        <div className={styles["form-row"]}>
          <FormField
            id="path"
            isRequired
            label="Path"
            placeholder="/public/api/ver1/users/change_mode"
          />
          <FormField
            id="searchParams"
            isRequired={false}
            label="Search Params"
            placeholder="?mode=paper"
          />
        </div>
        <FormField
          id="payload"
          isRequired={false}
          label="Payload"
          placeholder={`{
  "autobalance_enabled": false,
  "auto_balance_period": 12,
  "hedge_available": false,
  "hedge_enabled": false,
  "bots_allowed": true,
  "id": 1234567442428,ß
  "is_locked": false,
}`}
          isTextarea={true}
        />
        <FormButton>Generate SHA signature</FormButton>
      </form>
    </div>
  );
};

export default SignatureCalculatorForm;
