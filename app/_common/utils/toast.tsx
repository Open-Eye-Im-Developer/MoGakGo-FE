// eslint-disable-next-line no-restricted-imports
import { toast as sonner } from "sonner";

import CustomSonner from "../components/CustomSonner";

interface SonnerData {
  description?: string;
  action?: {
    label?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}

export const toast = {
  success(title: string, data?: SonnerData) {
    sonner(
      <CustomSonner
        type="success"
        title={title}
        description={data?.description}
        label={data?.action?.label}
        onClick={data?.action?.onClick}
      />,
    );
  },
  error(title: string, data?: SonnerData) {
    sonner(
      <CustomSonner
        type="error"
        title={title}
        description={data?.description}
        label={data?.action?.label}
        onClick={data?.action?.onClick}
      />,
    );
  },
  warning(title: string, data?: SonnerData) {
    sonner(
      <CustomSonner
        type="warning"
        title={title}
        description={data?.description}
        label={data?.action?.label}
        onClick={data?.action?.onClick}
      />,
    );
  },
  info(title: string, data?: SonnerData) {
    sonner(
      <CustomSonner
        type="info"
        title={title}
        description={data?.description}
        label={data?.action?.label}
        onClick={data?.action?.onClick}
      />,
    );
  },
};
