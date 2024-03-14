import { toast } from "sonner";

import CustomSonner from "../components/CustomSonner";

interface SonnerData {
  description?: string;
  action: {
    label?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}

export const sonner = {
  success(title: string, data?: SonnerData) {
    toast(
      <CustomSonner
        type="success"
        title={title}
        description={data?.description}
        label={data?.action.label}
        onClick={data?.action.onClick}
      />,
      { unstyled: true },
    );
  },
  error(title: string, data?: SonnerData) {
    toast(
      <CustomSonner
        type="error"
        title={title}
        description={data?.description}
        label={data?.action.label}
        onClick={data?.action.onClick}
      />,
      { unstyled: true },
    );
  },
  warning(title: string, data?: SonnerData) {
    toast(
      <CustomSonner
        type="warning"
        title={title}
        description={data?.description}
        label={data?.action.label}
        onClick={data?.action.onClick}
      />,
      { unstyled: true },
    );
  },
  info(title: string, data?: SonnerData) {
    toast(
      <CustomSonner
        type="info"
        title={title}
        description={data?.description}
        label={data?.action.label}
        onClick={data?.action.onClick}
      />,
      { unstyled: true },
    );
  },
};
