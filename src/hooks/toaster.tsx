import { toaster } from "@/components/chakra-ui/toaster";
import { useCallback } from "react";
import { ToasterOptions } from "@/types/toaster/options.ts";
import { ToasterStatus } from "@/constants/toaster/status";

const useToasterUpdate = (id: string) => {
  return useCallback((options: ToasterOptions) => {
    if (options.type !== ToasterStatus.LOADING) {
      toaster.update(id, options);
    }

    if (toaster.isVisible(id)) return;
    toaster.loading({
      id,
      ...options,
    });
  }, []);
};

export { useToasterUpdate };
