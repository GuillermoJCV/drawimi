import { ToasterStatus } from "@/constants/toaster/status";

type ToasterOptions = {
  title: string;
  description: string;
  type: ToasterStatus;
  duration?: number;
};

export type { ToasterOptions };
